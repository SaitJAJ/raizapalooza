'use client'
import {forwardRef, useRef, useState} from "react";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import {addTicket} from "@/app/lib/ticketServices";
import TextInput from "@/components/TextInput";
import HiddenInput from "@/components/HiddenInput";
import {useRouter} from "next/navigation";
import BirthdayPicker from "@/components/BirthdayPicker";

const InfoForm = forwardRef(function InfoForm({loading},formRef){

    return(
        <form className={'w-full min-h-[100vh] py-8'} ref={formRef} name={"infoForm"} id={"infoForm"}>
            <HiddenInput type={'text'} id={'tier'} value={'earlyBird'} hidden={true} className={'hidden'}/>
            <TextInput label={'Name'} type={"text"} id={'name'} placeholder={'Name'}/>
            <TextInput label={'Email'} type={"text"} id={"email"} placeholder={'Email'}/>
            <TextInput label={'Phone Number'} type={"text"} id={'phoneNumber'}  placeholder={'Phone Number'}/>
            <BirthdayPicker label={'Birthday'} id={'birthday'} minDate={new Date('April 13, 2006')} />
            <Loading loading={loading}>
                <Button type={'submit'} value={"Submit"}/>
            </Loading>
        </form>
    )
})
export default InfoForm;