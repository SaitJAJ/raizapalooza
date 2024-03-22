'use client'
import {CreditCard,ApplePay, GooglePay, PaymentForm} from 'react-square-web-payments-sdk'
import {submitPayment} from "@/app/lib/squareServices";
export default function SquarePayment(){


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

    return(
        <div className={'min-h-[100vh] mx-auto'} id={'payment'}>
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
        </div>
    )
}