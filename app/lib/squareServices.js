'use server'
import {Client} from 'square'

const {paymentsApi} = new Client(
    {
        accessToken:process.env.SQUARE_ACCESS_TOKEN,
        environment:"sandbox"
    }
)

export async function submitPayment(sourceId,amount=100,currency="CAD"){
    try{
        const {result} = await paymentsApi.createPayment({
            idempotencyKey: crypto.randomUUID(),
            sourceId,
            amountMoney:{
                currency:currency,
                amount:amount
            }
        })
        console.log(result)
        return result

    }catch (error){
        console.error(error)
    }
}

