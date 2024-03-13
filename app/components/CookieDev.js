'use client'
import Button from "@/components/Button";
import {useRef, useState} from "react";
import {addRoleCookie} from "@/app/lib/cookieServices";
import Loading from "@/components/Loading";
import Hyperlink from "@/components/Hyperlink";

export default function CookieDev(){
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const handleSubmit=async (e)=>{
        setLoading(true)
        console.log(e)
        e.preventDefault()
        await addRoleCookie(e.target.role.value)
        setLoading(false)
    }
    return(
        <>
            <form className={'grid grow'} onSubmit={handleSubmit}>
                <input id={'role'} type={'text'} />
                <Loading loading={loading}>
                    <Button type={'submit'} value={"Add Role"}/>
                </Loading>
            </form>
            <Hyperlink href={'/api/mail/hello/cookie'}>Click Me</Hyperlink>
        </>
        )
}