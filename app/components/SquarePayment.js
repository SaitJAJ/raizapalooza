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
        <div className={'w-1/2 my-80 mx-auto'}>
            <PaymentForm
                formProps={{zip: false}}
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