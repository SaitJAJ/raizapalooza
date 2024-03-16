'use server'
import {ApiError, Client} from 'square'

const {paymentsApi} = new Client(
    {
        accessToken:process.env.SQUARE_ACCESS_TOKEN,
        environment:"sandbox"
    }
)

export async function submitPayment(sourceId,amount=100,currency="CAD"){
    try{
        const data = await paymentsApi.createPayment({
            idempotencyKey: crypto.randomUUID(),
            sourceId,
            amountMoney:{
                currency:currency,
                amount:amount
            }
        }).then(result=>{
            console.log("testResult")
            // console.log(result)
        }).catch(error=>{
            if(error instanceof ApiError){
                console.log(error)
                error.errors.map(error=>{
                    console.log(error.code)
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

