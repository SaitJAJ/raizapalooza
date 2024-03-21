'use client'
import {CreditCard,ApplePay, GooglePay, PaymentForm} from 'react-square-web-payments-sdk'
import {submitPayment} from "@/app/lib/squareServices";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import {useReducer, useState} from "react";
import SelectInput from "@/components/SelectInput";

const billingReducer =(state,action)=>{
    console.log(action)
    switch(action.type){

        case('change'):
            return({
                    ...state,
                    [action.tag]:action.value,
            }
            )
    }
}
const billingInitializer =(form)=>{
    return(
        {
            addressLines: [],
            familyName:form.get('name').split(' ').slice(1).join(' '),
            givenName: form.get('name').split(' ')[0],
            email: form.get('email'),
            country: 'CA',
            phone: form.get('phone'),
            region: 'AB',
            city: 'Calgary',
        }
    )
}
export default function SquarePayment({form,scrollBack,clearAll}){
    const [billingDetails, billingDispatch] = useReducer(billingReducer,form,billingInitializer)
    const handlePayment = async(token,verifiedBuyer)=>{
        // console.log(verifiedBuyer)
        let payment = await submitPayment(token.token,verifiedBuyer.token,form.get('cost')*100)
        console.log('token:', token);
        console.log('verifiedBuyer:', verifiedBuyer);
    }
    const createVerificationDetails=()=>({
        amount: form.get('cost'),
        currencyCode: 'CAD',
        intent: 'CHARGE',
        billingContact: billingDetails,
    })
    // const updatePaymentRequestInstance = async (e)=>{
    //     paymentRequest.update({
    //         total: {
    //             amount: form.get('cost'),
    //             label: "Total",
    //         },
    //     })
    // }
    const paymentRequest=() =>({
        countryCode: "CA",
        currencyCode: "CAD",
        total: {
            amount: form.get('cost'),
            label: "Total",
        },
        // billingContact: billingDetails,
        billing:billingDetails,
        requestBillingContact:true,
    })
    console.log(form.get('cost'))
    // console.log(form.getAll())
        return(
        <div className={'h-[100vh] pb-[20vh] overflow-y-scroll no-scrollbar grid snap-center'} id={'payment'}>
            <div className={'h-fit w-full flex justify-between py-8'}>
                <Button value={'My Info'} onClick={scrollBack}/>
                <Button value={'Cancel'} onClick={clearAll}/>
            </div>
            <form id={'billing'} name={'billing'} >
                <h3>Billing Details</h3>
                <TextInput label={"First name"} id={'givenName'} value={billingDetails.givenName} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Last name"} id={"familyName"} value={billingDetails.familyName} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Email"} id={'email'} value={billingDetails.email} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Phone"} id={'phone'} value={billingDetails.phone} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Address line 1"} id={'address-1'} value={billingDetails.addressLines[0]} onChange={e=>{billingDispatch({type:"address",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Address line 2"} id={'address-2'} value={billingDetails.addressLines[1]} onChange={e=>{billingDispatch({type:"address",tag:e.target.id,value:e.target.value})}}/>
                <div className={'flex flex-nowrap'}>
                    <SelectInput label={"Country"} id={"country"} value={billingDetails.country} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                    <SelectInput label={"Province"} id={"country"} value={billingDetails.country} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                    <SelectInput label={"City"} id={"country"} value={billingDetails.country} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                  </div>
            </form>
                <PaymentForm
                    applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID}
                    cardTokenizeResponseReceived={handlePayment}
                    createPaymentRequest={paymentRequest}
                    createVerificationDetails={createVerificationDetails}
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