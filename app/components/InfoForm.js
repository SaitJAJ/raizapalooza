'use client'
import {forwardRef, useEffect, useReducer} from "react";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import HiddenInput from "@/components/HiddenInput";
import BirthdayPicker from "@/components/BirthdayPicker";
import NumberInput from "@/components/NumberInput";
import TicketHeader from "@/components/layout/TicketHeader";

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
const InfoForm = forwardRef(function InfoForm({loading,tier},formRef){
    const [cost,costDispatch] = useReducer(costReducer,tier==='earlybird'?15:20,undefined)
    const scrollBack=()=>{
        const ticketBox = document.getElementById('ticketbox')
        ticketBox.scrollIntoView({behavior:"smooth"})
    }
    useEffect(()=>{
        costDispatch({type: 'calc',tier:tier,quant:parseInt(formRef.current.quant.value)})
    },[tier,formRef])
    return(
        <>
            <div className={'w-full grid min-h-[100vh] snap-start'} id={"infoForm"}>
                <div className={'h-fit w-full flex justify-around py-2 '}>
                    <Button value={'Tickets'} onClick={scrollBack}/>
                    <Button value={'Reset'} onClick={()=>formRef.current.reset()}/>
                </div>
                <TicketHeader title={tier}/>
                <form ref={formRef} className={'md:px-[10vw]'} name={"form"} id={'form'}>
                    <h3 className={' md:text-2xl text-base '}>Mandatory Ticket Info</h3>
                    <NumberInput label={'Ticket Quantity'} id={"quant"} onChange={quant=>costDispatch({type:'calc',tier:tier,quant:quant})} min={1} max={8}>
                        <HiddenInput id={'cost'} value={cost} hidden={false} label={`$${cost} CAD`}/>
                    </NumberInput>
                    <TextInput label={'Name'} type={"text"} id={'name'} placeholder={'Name'} required />
                    <TextInput label={'Email'} type={"email"} id={"email"} placeholder={'Email'} required />
                    <BirthdayPicker label={'Birthday'} id={'birthday'} minDate={new Date('April 13, 2006')} required/>
                    <HiddenInput type={'text'} id={'tier'} value={tier} hidden={true}/>
                    <h3 className={'md:text-2xl text-base'}>Additional Fields (not required)</h3>
                    <TextInput label={'Phone Number'} type={"text"} id={'phone'}  placeholder={'Phone Number'}/>
                    <Loading loading={loading}>
                        <Button type={'submit'} value={"Go to Payment"}/>
                    </Loading>
                </form>
            </div>

        </>

    )
})
export default InfoForm;