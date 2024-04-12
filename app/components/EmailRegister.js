'use client'
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {useRef, useState} from "react";
import {returnRaffleTicket} from "@/app/lib/ticketServices";
import Loading from "@/components/Loading";

export default function EmailRegister(){
    const formRef = useRef()
    const [loading,setLoading] = useState(false)
    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        await returnRaffleTicket(new FormData(formRef.current))
        setLoading(false)
    }

    return(
        <form onSubmit={handleSubmit} ref={formRef} id={"emaiLRegister"} className={'grid h-[40vh]'}>
            <TextInput type={'email'} id={'email'} label={"Enter your Email"} required/>
            <Loading loading={loading}>
                <Button type={'submit'} value={"Start Collecting Raffle Tickets!"} />
            </Loading>
        </form>
    )
}