'use client'
import {forwardRef, useReducer} from "react";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import HiddenInput from "@/components/HiddenInput";
import BirthdayPicker from "@/components/BirthdayPicker";
import NumberInput from "@/components/NumberInput";

const costReducer = (state,action)=>{
    switch (action.type){
        case('calc'):
            if(action.tier==='earlyBird'){
                return(15*action.quant)
            }else{
                return(20*action.quant)
            }
    }
}
const InfoForm = forwardRef(function InfoForm({loading},formRef){
    const [cost,costDispatch] = useReducer(costReducer,15,undefined)


    const scrollBack=()=>{
        const ticketBox = document.getElementById('ticketbox')
        ticketBox.scrollIntoView({behavior:"smooth"})
    }
    return(
        <>
            <div className={'w-full grid min-h-[100vh] snap-start'} id={"infoForm"}>
                <div className={'h-fit w-full flex justify-between py-8 '}>
                    <Button value={'Tickets'} onClick={scrollBack}/>
                    <h2>

                    </h2>
                    <Button value={'Reset'} onClick={()=>formRef.current.reset()}/>
                </div>
                <form ref={formRef} className={'md:px-[10vw]'} name={"form"} id={'form'}>
                    <h3 className={' md:text-2xl text-base '}>Mandatory Ticket Info</h3>
                    <NumberInput label={'Ticket Quantity'} id={"quant"} onChange={quant=>costDispatch({type:'calc',tier:"earlyBird",quant:quant})} min={1} max={8}>
                        <HiddenInput id={'cost'} value={cost} hidden={false} label={`$${cost} CAD`}/>
                    </NumberInput>
                    <TextInput label={'Name'} type={"text"} id={'name'} placeholder={'Name'} />
                    <TextInput label={'Email'} type={"text"} id={"email"} placeholder={'Email'} />
                    <BirthdayPicker label={'Birthday'} id={'birthday'} minDate={new Date('April 13, 2006')} required/>
                    <HiddenInput type={'text'} id={'tier'} value={'earlyBird'} hidden={true}/>
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