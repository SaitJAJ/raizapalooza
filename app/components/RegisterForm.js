'use client'
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {useRef, useState} from "react";
import {register} from "@/app/lib/authorizationServices";

export default function RegisterForm(){
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const doRegister=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setMessage('Logging you in')
        setMessage(await register(new FormData(formRef.current)))
        setLoading(false)
    }

    return(
        <form ref={formRef} onSubmit={doRegister} className={'my-[13vh] grid justify-around'}>
            <TextInput type={"text"} id={"name"} label={"Name"}/>
            <TextInput type={"email"} id={"email"} label={"Email"}/>
            <TextInput type={"password"} id={"password"} label={"Password"}/>
            <TextInput type={"password"} id={"confPassword"} label={"Confirm Password"}/>
            <Button type={'submit'} loading={loading} value={"Register"}/>
            <p className={'text-sm md:text-lg text-center p-4'}>{message}</p>
        </form>
    )
}