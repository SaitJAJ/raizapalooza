'use client'
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {useRef, useState} from "react";
import {returnRaffleTicket} from "@/app/lib/ticketServices";
import Loading from "@/components/Loading";

export default function EmailRegister(){
    const [loading, setLoading] = useState(false)
    const formRef = useRef()
    const handleSubmit = async (e)=>{
        setLoading(true)
        e.preventDefault()
        if(e.target.email.value !== ""){

            const formData = new FormData(formRef.current)
            await returnRaffleTicket(formData)

        }
        setLoading(false)
    }

    return(
        <form ref={formRef} id={'emailForm'} onSubmit={handleSubmit} >
            <TextInput label={"Enter your Email"} id={'email'} type={'email'} required/>
            <Loading loading={loading} >
                <Button value={"Enter email for Raffle"} type={'submit'}/>
            </Loading>
        </form>
    )
}