'use server'
import {ApiError, Client} from 'square'
import {addTicket} from "@/app/lib/ticketServices";
import {isRedirectError} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";
import {sendTicketEmail} from "@/app/lib/emailServices";

const {paymentsApi} = new Client(
    {
        accessToken:process.env.SQUARE_ACCESS_TOKEN,
        environment:process.env.SQUARE_ENVIRONMENT
    }
)

export async function submitPayment(sourceId,verificationToken,amount=100,currency="CAD",formData=new FormData()){
    try{
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
        switch(data.statusCode){
            case(200):
                formData.append('paymentId',data.result.payment.id)
                formData.append('orderId',data.result.payment.orderId)
                formData.append('paymentDate',new Date(data.result.payment.createdAt))
                let addTickets = []
                for(let i = 0; i < parseInt(formData.get('quant')); i++){
                    addTickets.push(addTicket(formData));
                }
                await Promise.all(addTickets)
                // await sendTicketEmail(formData.get('email'),data.result.payment.orderId) // Disabled until email is formatted correctly
                redirect(`/tickets/manage/${data.result.payment.orderId}`,'push')
                break;
            case(500):
                return({error:true,status:500,message:"Something went wrong with Square Payments!"})

            default:
                return({error:true,status:501,message:"Improper data!",data:JSON.stringify(data)})
        }

    }catch (error){
        if(isRedirectError(error)){
            throw(error)
        }
        console.error(error)
        return error
    }
}

