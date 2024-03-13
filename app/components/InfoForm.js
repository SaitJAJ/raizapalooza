'use client'
import {useRef, useState} from "react";
import Loading from "@/components/Loading";
import Button from "@/components/Button";
import {addTicket} from "@/app/lib/ticketServices";
import TextInput from "@/components/TextInput";
import HiddenInput from "@/components/HiddenInput";
import {useRouter} from "next/navigation";

export default function InfoForm(){
    const [loading,setLoading] = useState(false)
    const formRef=useRef()
    const router = useRouter()
    const handleSubmit=async (e)=>{
        setLoading(true)
        let formData = new FormData(formRef.current)
        console.log(formData)
        await addTicket(formData)
        setLoading(false)
        router.refresh()
    }

    return(
        <form action={handleSubmit} ref={formRef} className={'flex flex-wrap justify-around mx-80'} name={"infoForm"} id={"infoForm"}>
            <HiddenInput type={'text'} id={'tier'} value={'earlyBird'} hidden={true} className={'hidden'}/>
            <TextInput type={"text"} id={'name'} placeholder={'Name'}/>
            <TextInput type={"text"} id={"email"} placeholder={'Email'}/>
            <TextInput type={"text"} id={'phoneNumber'}  placeholder={'Phone Number'}/>
            <Loading loading={loading}>
                <Button type={'submit'} value={"Submit"}/>
            </Loading>
        </form>
    )
}