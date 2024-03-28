'use client'
import Button from "@/components/Button";
import {useRef, useState} from "react";
import TextInput from "@/components/TextInput";
import {login} from "@/app/lib/authorizationServices";

export default function LoginForm(){
    const [loading, setLoading]= useState(false)
    const [message,setMessage] = useState('')
    const formRef = useRef()
    const submit=async(e)=>{
        e.preventDefault()
        setLoading(true)
        setMessage('Logging you in')
        setMessage(await login(new FormData(formRef.current)))
        setLoading(false)
    }

    return(
        <form ref={formRef} onSubmit={submit} className={'my-[13vh] grid justify-around'}>
            <TextInput type={"email"} id={"email"} label={"Email"}/>
            <TextInput type={"password"} id={"password"} label={"Password"}/>
            <Button type={'submit'} loading={loading} value={"Login"}/>
            <p className={'text-sm md:text-lg text-center p-4'}>{message}</p>
        </form>
    )
}