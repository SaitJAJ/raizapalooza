'use client'
import {CreditCard, PaymentForm} from 'react-square-web-payments-sdk'
export default function SquarePayment(){
    return(
        <div className={'w-1/2 mx-auto'}>
            <PaymentForm
                applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID}
                cardTokenizeResponseReceived={(token,verifiedBuyer)=>{
                    console.log('token:', token);
                    console.log('verifiedBuyer:', verifiedBuyer);
                }}
                locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID}
            >
                <CreditCard/>

            </PaymentForm>
        </div>
    )
}