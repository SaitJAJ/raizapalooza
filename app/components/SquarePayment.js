'use client'
import {CreditCard, GooglePay, PaymentForm} from 'react-square-web-payments-sdk'
import {submitPayment} from "@/app/lib/squareServices";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { useReducer, useState} from "react";
import SelectInput from "@/components/SelectInput";
const countries=[
    {value:"Canada",id:"CA"},
    {value:"United States of America",id:"US"}
]
const states= [
    {
        "value": "Alabama",
        "id": "AL"
    },
    {
        "value": "Alaska",
        "id": "AK"
    },
    {
        "value": "Arizona",
        "id": "AZ"
    },
    {
        "value": "Arkansas",
        "id": "AR"
    },
    {
        "value": "American Samoa",
        "id": "AS"
    },
    {
        "value": "California",
        "id": "CA"
    },
    {
        "value": "Colorado",
        "id": "CO"
    },
    {
        "value": "Connecticut",
        "id": "CT"
    },
    {
        "value": "Delaware",
        "id": "DE"
    },
    {
        "value": "District of Columbia",
        "id": "DC"
    },
    {
        "value": "Florida",
        "id": "FL"
    },
    {
        "value": "Georgia",
        "id": "GA"
    },
    {
        "value": "Guam",
        "id": "GU"
    },
    {
        "value": "Hawaii",
        "id": "HI"
    },
    {
        "value": "Idaho",
        "id": "ID"
    },
    {
        "value": "Illinois",
        "id": "IL"
    },
    {
        "value": "Indiana",
        "id": "IN"
    },
    {
        "value": "Iowa",
        "id": "IA"
    },
    {
        "value": "Kansas",
        "id": "KS"
    },
    {
        "value": "Kentucky",
        "id": "KY"
    },
    {
        "value": "Louisiana",
        "id": "LA"
    },
    {
        "value": "Maine",
        "id": "ME"
    },
    {
        "value": "Maryland",
        "id": "MD"
    },
    {
        "value": "Massachusetts",
        "id": "MA"
    },
    {
        "value": "Michigan",
        "id": "MI"
    },
    {
        "value": "Minnesota",
        "id": "MN"
    },
    {
        "value": "Mississippi",
        "id": "MS"
    },
    {
        "value": "Missouri",
        "id": "MO"
    },
    {
        "value": "Montana",
        "id": "MT"
    },
    {
        "value": "Nebraska",
        "id": "NE"
    },
    {
        "value": "Nevada",
        "id": "NV"
    },
    {
        "value": "New Hampshire",
        "id": "NH"
    },
    {
        "value": "New Jersey",
        "id": "NJ"
    },
    {
        "value": "New Mexico",
        "id": "NM"
    },
    {
        "value": "New York",
        "id": "NY"
    },
    {
        "value": "North Carolina",
        "id": "NC"
    },
    {
        "value": "North Dakota",
        "id": "ND"
    },
    {
        "value": "Northern Mariana Islands",
        "id": "MP"
    },
    {
        "value": "Ohio",
        "id": "OH"
    },
    {
        "value": "Oklahoma",
        "id": "OK"
    },
    {
        "value": "Oregon",
        "id": "OR"
    },
    {
        "value": "Pennsylvania",
        "id": "PA"
    },
    {
        "value": "Puerto Rico",
        "id": "PR"
    },
    {
        "value": "Rhode Island",
        "id": "RI"
    },
    {
        "value": "South Carolina",
        "id": "SC"
    },
    {
        "value": "South Dakota",
        "id": "SD"
    },
    {
        "value": "Tennessee",
        "id": "TN"
    },
    {
        "value": "Texas",
        "id": "TX"
    },
    {
        "value": "Trust Territories",
        "id": "TT"
    },
    {
        "value": "Utah",
        "id": "UT"
    },
    {
        "value": "Vermont",
        "id": "VT"
    },
    {
        "value": "Virginia",
        "id": "VA"
    },
    {
        "value": "Virgin Islands",
        "id": "VI"
    },
    {
        "value": "Washington",
        "id": "WA"
    },
    {
        "value": "West Virginia",
        "id": "WV"
    },
    {
        "value": "Wisconsin",
        "id": "WI"
    },
    {
        "value": "Wyoming",
        "id": "WY"
    }
]
const provinces= [
    {
        "value": "Newfoundland and Labrador",
        "id": "NL"
    },
    {
        "value": "Prince Edward Island",
        "id": "PE"
    },
    {
        "value": "Nova Scotia",
        "id": "NS"
    },
    {
        "value": "New Brunswick",
        "id": "NB"
    },
    {
        "value": "Quebec",
        "id": "QC"
    },
    {
        "value": "Ontario",
        "id": "ON"
    },
    {
        "value": "Manitoba",
        "id": "MB"
    },
    {
        "value": "Saskatchewan",
        "id": "SK"
    },
    {
        "value": "Alberta",
        "id": "AB"
    },
    {
        "value": "British Columbia",
        "id": "BC"
    },
    {
        "value": "Yukon",
        "id": "YT"
    },
    {
        "value": "Northwest Territories",
        "id": "NT"
    },
    {
        "value": "Nunavut",
        "id": "NU"
    }
]

const billingReducer =(state,action)=>{
    switch(action.type){
        case('change'):
            return(
                {
                    ...state,
                    [action.tag]:action.value,
                }
            )
        case('select'):
            console.log(action)
            let val=""
            console.log(action.value ==='Canada',action.value ==="Canada")
            if(action.value === 'Canada' || action.value === 'CA'){
                val = 'CA'
            }else if(action.value.length > 2){
                val = 'US'
            }else{
                val =action.value
            }
            return(
                {
                    ...state,
                    [action.tag]:val,
                }
            )
        case('address'):
            return(
                {
                    ...state,
                    // [action.tag]:action.value,
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
    const [paymentMessages,setPaymentMessages] = useState([])
    const [acknowledged, setAcknowledged ] = useState(false)

    const handlePayment = async(token,verifiedBuyer)=>{
        setPaymentMessages(['Attempting Payment...'])
        try{
            let payment = await submitPayment(token.token,verifiedBuyer.token,form.get('cost')*100,"CAD",form)
            if(payment.error){
                setPaymentMessages(JSON.parse(payment.data).errors)
            }
        }
        catch(err){

        }

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
        // billing:billingDetails,
    })
        return(
        <div className={'h-[100vh] overflow-y-scroll no-scrollbar grid snap-center'} id={'payment'}>
            <div className={'h-fit w-full flex justify-around py-8'}>
                <Button value={'My Info'} onClick={scrollBack}/>
                <Button value={'Cancel'} onClick={clearAll}/>
            </div>
            <form id={'billing'} className={'md:px-[10vw]'} name={'billing'} >
                <h3 className={'text-4xl'}>Billing Details</h3>
                <TextInput label={"First name"} id={'givenName'} value={billingDetails.givenName} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Last name"} id={"familyName"} value={billingDetails.familyName} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Email"} id={'email'} value={billingDetails.email} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Phone"} id={'phone'} value={billingDetails.phone} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Address line 1"} id={'address-1'} value={billingDetails.addressLines[0]} onChange={e=>{billingDispatch({type:"address",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"Address line 2"} id={'address-2'} value={billingDetails.addressLines[1]} onChange={e=>{billingDispatch({type:"address",tag:e.target.id,value:e.target.value})}}/>
                <TextInput label={"City"} id={"city"} value={billingDetails.city} onChange={e=>{billingDispatch({type:"change",tag:e.target.id,value:e.target.value})}}/>

                <div className={'flex flex-nowrap'}>
                    <SelectInput label={"Country"} id={"country"} defaultValue={'Country'} value={billingDetails.country} options={countries} onChange={e=>{billingDispatch({type:"select",tag:e.target.id,value:e.target.value})}}/>
                    {
                        billingDetails.country!=='US'?
                            <SelectInput label={"Province"} id={"region"} options={provinces} defaultValue={'Province'} value={billingDetails.region} onChange={e=>{billingDispatch({type:"select",tag:e.target.id,value:e.target.value})}}/>
                            :
                            <SelectInput label={"State"} id={"region"} options={states} defaultValue={'State'} value={billingDetails.region} onChange={e=>{billingDispatch({type:"select",tag:e.target.id,value:e.target.value})}}/>
                    }
                </div>
                <div className={'text-left text-sm '}>
                    {Object.values(paymentMessages).map((message,index)=>{
                        if(message.code !== undefined){
                            return(
                                <div key={message.code + ''+index} className={'bg-background'}>
                                    <p className={'text-lg text-element-1'}>{message.category}</p>
                                    <p className={'text-sm'}> {message.code}</p>
                                    <p className={'text-sm'}>{message.detail}</p>
                                </div>
                            )
                        }else{
                            return(
                                <p key={'one'+index}>{message}</p>
                            )
                        }

                    })}
                </div>
            </form>
            <h3 className={'text-4xl text-center my-4'}>Payment</h3>
            <div className={' mb-10 min-h-[40vh]'}>

                {acknowledged?
                    <div>
                        <p className={'text-center'}>!!! All purchases final !!! </p>
                        <p className={'text-center'}>
                            <span className={'text-xl'}>Your Order:</span>     ${form.get('cost')} for {form.get('quant')} {form.get('tier')==='earlybird'?"Early Bird":"General Admission"} {form.get('quant')>1?"Tickets":"Ticket"}
                        </p>
                        <PaymentForm
                            applicationId={process.env.NEXT_PUBLIC_SQUARE_APPLICATION_ID}
                            cardTokenizeResponseReceived={handlePayment}
                            createPaymentRequest={paymentRequest}
                            createVerificationDetails={createVerificationDetails}
                            locationId={process.env.NEXT_PUBLIC_SQUARE_LOCATION_ID}
                        >
                            {/*<ApplePay />*/}

                            <CreditCard>
                                Pay ${form.get('cost')} for {form.get('quant')} {form.get('tier')==='earlybird'?"Early Bird":"General Admission"} {form.get('quant')>1?"Tickets":"Ticket"}
                            </CreditCard>
                            <hr className={'my-2'}/>
                            <GooglePay />
                            {/*<CreditCard>*/}
                            {/*    Pay ${form.get('cost')} for {form.get('quant')} {form.get('tier')==='earlybird'?"Early Bird":"General Admission"} {form.get('quant')>1?"Tickets":"Ticket"}*/}
                            {/*</CreditCard>*/}
                        </PaymentForm>
                    </div>

                    :

                    <div>
                        <p className={'text-center'}>
                            As this website accepts payment & uses cookies, we advise you to review our <a href={'/terms'}>Terms & Conditions</a>.
                            If you do not wish to accept our terms and conditions, you will have to purchase a general admission ticket at door on the day of the event.
                        </p>
                        <Button value={"Accept Terms & Conditions"} onClick={()=>setAcknowledged(true)}/>
                    </div>}
            </div>
        </div>
    )
}