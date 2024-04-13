'use client'
import QuickForm from "@/components/QuickForm";
import QuickTickets from "@/components/QuickTickets";
import {logPaymentForm} from "@/app/lib/squareServices";
import {useEffect, useRef, useState} from "react";

export default function QuickSequence(){
    const formRef=useRef()
    const [formData,setFormData] = useState(null)
    useEffect(() => {
        const form = formRef.current;
        form.addEventListener('submit',handleSubmit)
        return()=>{
            form.removeEventListener('submit',handleSubmit)
        }
    }, []);
    const handleSubmit=(e)=>{
        console.log(e)
        e.preventDefault()
        setFormData(new FormData(formRef.current))
        setTimeout(()=>{
            try{
                const payment = document.getElementById('quickForm')
                payment.scrollIntoView({behavior:"smooth"})
            }catch(err){
                console.log(err)
                console.log("here")
                const errmsg = document.getElementById('paymentError')
                errmsg.scrollIntoView({behavior:"smooth"})
            }

        },200)
    }
    const scrollBack=()=>{
        const form = document.getElementById('quickTickets')
        form.scrollIntoView({behavior:"smooth"})
        setTimeout(()=>{
            setFormData(null)
        },600)

    }

    return(
        <main className={'h-[100vh] px-8 md:px-20 overflow-y-hidden '} >
            <QuickTickets ref={formRef}/>
            {formData !== null?
                <QuickForm form={formData} scrollBack={scrollBack}/>
                :
                null
            }
        </main>
        )
}