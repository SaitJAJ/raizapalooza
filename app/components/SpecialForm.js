'use client'
import Button from "@/components/Button";
import TicketHeader from "@/components/layout/TicketHeader";
import NumberInput from "@/components/NumberInput";
import HiddenInput from "@/components/HiddenInput";
import TextInput from "@/components/TextInput";
import BirthdayPicker from "@/components/BirthdayPicker";
import Loading from "@/components/Loading";
import {useReducer, useRef, useState} from "react";
import {genSpecialTickets} from "@/app/lib/ticketServices";

const costReducer = (state,action)=>{
    switch (action.type){
        case('calc'):
            if(action.tier==='earlybird'){
                return(15*action.quant)
            }else{
                return(20*action.quant)
            }
    }
}

export default function SpecialForm({tier}){
    const formRef = useRef()
    const [cost,costDispatch] = useReducer(costReducer,15,undefined)
    const [loading, setLoading] = useState(false)
    const scrollBack=()=>{
        const ticketBox = document.getElementById('ticketbox')
        ticketBox.scrollIntoView({behavior:"smooth"})
    }
    const constructFormData=async ()=>{
        setLoading(true)
        let formData = new FormData(formRef.current)
        let date = new Date(formRef.current['bday-year'].value,formRef.current['bday-month'].value-1, formRef.current['bday-day'].value);
        formData.append("birthday",date)
        await genSpecialTickets(formData)
        setLoading(false)
    }

    return(
        <>
            <div className={'w-full grid min-h-[100vh] snap-start'} id={"infoForm"}>
                <TicketHeader title={tier}/>
                <form ref={formRef} action={constructFormData} className={'md:px-[10vw]'} name={"form"} id={'form'}>
                    <h3 className={' md:text-2xl text-base '}>Mandatory Ticket Info</h3>
                    <NumberInput label={'Ticket Quantity'} id={"quant"} onChange={quant=>costDispatch({type:'calc',tier:tier,quant:quant})} min={1} max={2}>
                        {/*<HiddenInput id={'cost'} value={cost} hidden={false} label={`$${cost} CAD`}/>*/}
                    </NumberInput>
                    <TextInput label={'Name'} type={"text"} id={'name'} placeholder={'Name'} />
                    <TextInput label={'Email'} type={"text"} id={"email"} placeholder={'Email'} />
                    <BirthdayPicker label={'Birthday'} id={'birthday'} minDate={new Date('April 13, 2006')} required/>
                    <HiddenInput type={'text'} id={'tier'} value={tier} hidden={true}/>
                    <h3 className={'md:text-2xl text-base'}>Additional Fields (not required)</h3>
                    <TextInput label={'Phone Number'} type={"text"} id={'phone'}  placeholder={'Phone Number'}/>
                    <Loading loading={loading}>
                        <Button type={'submit'} value={"Generate my Tickets"}/>
                    </Loading>
                </form>
            </div>
        </>

    )
}