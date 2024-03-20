'use client'
import {CreditCard,ApplePay, GooglePay, PaymentForm} from 'react-square-web-payments-sdk'
import {submitPayment} from "@/app/lib/squareServices";
import Button from "@/components/Button";
export default function SquarePayment({form}){


    const handlePayment = async(token,verifiedBuyer)=>{
        let payment = await submitPayment(token.token)
        console.log('token:', token);
        console.log('verifiedBuyer:', verifiedBuyer);
    }
    const paymentRequest=() =>({
        countryCode: "CA",
        currencyCode: "CAD",
        intent:'CHARGE',
        total: {
            amount: "1.00",
            label: "Total",
        },
    })
    const scrollBack=()=>{
        const form = document.getElementById('infoForm')
        form.scrollIntoView({behavior:"smooth"})
    }
    return(
        <div className={'min-h-[100vh] flex flex-wrap justify-around snap-center'} id={'payment'}>
            <div className={'w-full h-fit flex justify-between py-8'}>
                <Button value={'My Info'} onClick={scrollBack}/>
                <h2>
                    <Button value={"Click"} onClick={()=>console.log(form.get("Name"))}/>
                </h2>
                <Button value={'Cancel'} onClick={()=>document.getElementById('infoForm').reset()}/>
            </div>
            {/*<div className={''}>*/}
                <PaymentForm
                    applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID}
                    cardTokenizeResponseReceived={handlePayment}
                    createPaymentRequest={paymentRequest}
                    locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID}
                >
                    {/*<ApplePay />*/}
                    <GooglePay />
                    <CreditCard/>
                </PaymentForm>
            {/*</div>*/}
        </div>
    )
}