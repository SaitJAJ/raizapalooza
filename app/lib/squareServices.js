'use server'
import {ApiError, Client} from 'square'

const {paymentsApi} = new Client(
    {
        accessToken:process.env.SQUARE_ACCESS_TOKEN,
        environment:"sandbox"
    }
)

export async function submitPayment(sourceId,verificationToken,amount=100,currency="CAD"){
    try{
        let body = {

        }
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
            // console.log("testResult")
            // console.log(result)
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

        console.log(data)
        return data

    }catch (error){
        console.error(error)
    }
}

