'use server'
import {ApiError, Client} from 'square'
import {addTicket} from "@/app/lib/ticketServices";
import {isRedirectError} from "next/dist/client/components/redirect";
import {sendReceiptEmail} from "@/app/lib/emailServices";
import {redirect} from "next/navigation";

const {paymentsApi} = new Client(
    {
        accessToken:process.env.SQUARE_ACCESS_TOKEN,
        environment:process.env.SQUARE_ENVIRONMENT
    }
)

export async function logPaymentForm(formData){
    try{
        console.log(`Payment form opened with email ${formData.get('email')}`)
    }catch(err){
        console.log(`Payment form opened with no email`)
    }
}

export async function submitPayment(sourceId,verificationToken,amount=100,currency="CAD",formData=new FormData()){
    try{
        try{
            console.log(`Submitting Payment for ${formData.get('email')}`)
        }catch(err){
            console.log('Submitting payment with broken email')
        }
        const data = await paymentsApi.createPayment({
            idempotencyKey: crypto.randomUUID(),
            sourceId,
            verificationToken,
            amountMoney:{
                currency:currency,
                amount:amount,
            }
        }).then(result=>{
            return(result)
        }).catch(error=>{
            if(error instanceof ApiError){
                let errors = []
                error.errors.map(error=>{
                    console.error("Error! : ",error)
                    errors.push(error)
                })
                return({statusCode:error.code,errors:errors})
            }else{
                console.error(error)
                return({statusCode:501,data:error})
            }
        })
        try{
            console.log(`Payment request for ${formData.get('email')} had status ${data.statusCode} `)
        }catch(err){
            console.log(`Payment request for broken email had status ${data.statusCode} `)
        }
        switch(data.statusCode){
            case(200):
                let paymentData = data.result.payment
                formData.append('paymentId',data.result.payment.id)
                formData.append('orderId',data.result.payment.orderId)
                formData.append('paymentDate',new Date(data.result.payment.createdAt))
                formData.append('receiptUrl',paymentData.receiptUrl)
                formData.append('paymentType',`${paymentData.cardDetails.card.cardBrand} , ${paymentData.cardDetails.card.cardType}`)
                let addTickets = []
                for(let i = 0; i < parseInt(formData.get('quant')); i++){
                    addTickets.push(addTicket(formData));
                }
                let ticketIds = await Promise.all(addTickets)
                await sendReceiptEmail(
                    {
                        payeeName:formData.get('name'),
                        paymentDate:paymentData.createdAt,
                        authorizedDate:paymentData.cardDetails.cardPaymentTimeline.authorizedAt,
                        amount:Number(paymentData.amountMoney.amount),
                        total:Number(paymentData.totalMoney.amount),
                        status:paymentData.status,
                        sourceType:paymentData.sourceType,
                        cardDetails:{
                            cardBrand:paymentData.cardDetails.card.cardBrand,
                            cardType:paymentData.cardDetails.card.cardType,
                            last4:paymentData.cardDetails.card.last4,
                        },
                        orderId:paymentData.orderId,
                        paymentId:paymentData.id,
                        buyerEmail:paymentData.buyerEmailAddress,
                        receiptNumber:paymentData.receiptNumber,
                        receiptUrl:paymentData.receiptUrl,
                    },
                    ticketIds,
                    formData.get('tier')
                    )

                redirect(`/tickets/manage/${data.result.payment.orderId}`,'push')
                return({error:false,status:200,message:"all is good"})
                break;
            case(500):
                return({error:true,status:500,message:"Something went wrong with Square Payments!"})

            default:
                return({error:true,status:501,message:"Improper data!",data:JSON.stringify(data)})
        }
        return({error:false})
    }catch (error){
        if(isRedirectError(error)){
            throw(error)
        }
        console.error(error)
        return error
    }
}

