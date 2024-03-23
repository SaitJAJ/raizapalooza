'use server'
import {ApiError, Client} from 'square'
import {addTicket} from "@/app/lib/ticketServices";
import {isRedirectError} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";

const {paymentsApi} = new Client(
    {
        accessToken:process.env.SQUARE_ACCESS_TOKEN,
        environment:"sandbox"
    }
)

export async function submitPayment(sourceId,verificationToken,amount=100,currency="CAD",formData=new FormData()){
    try{
        console.log(amount)
        const data = await paymentsApi.createPayment({
            idempotencyKey: crypto.randomUUID(),
            sourceId,
            verificationToken,
            amountMoney:{
                currency:currency,
                amount:amount
            }
        }).then(result=>{
            return(result)
        }).catch(error=>{
            if(error instanceof ApiError){
                error.errors.map(error=>{
                    console.log(error)
                    console.error("Error! : ",error.code)
                })
            }else{
                console.log("error")
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
                redirect(`/tickets/manage/${data.result.payment.orderId}`,'push')
            case(500):
                return({error:true,status:500,message:"Something went wrong with Square Payments!"})
            default:
                return data
        }

    }catch (error){
        if(isRedirectError(error)){
            throw(error)
        }
        console.error(error)
        return error
    }
}

