'use client'
import QuickForm from "@/components/QuickForm";
import QuickTickets from "@/components/QuickTickets";
import {logPaymentForm} from "@/app/lib/squareServices";
import {useRef} from "react";

export default function QuickSequence(){
    const formRef=useRef()

    const handleSubmit=(e)=>{
        setLoading(true)
        e.preventDefault()
        let formData = new FormData(formRef.current)
        let date = new Date(formRef.current['bday-year'].value,formRef.current['bday-month'].value-1, formRef.current['bday-day'].value);
        formData.append("birthday",date)
        setFormData(formData)
        logPaymentForm(formData)
        setTimeout(()=>{
            setLoading(false)
            try{
                const payment = document.getElementById('payment')
                payment.scrollIntoView({behavior:"smooth"})
            }catch(err){
                console.log(err)
                console.log("here")
                const errmsg = document.getElementById('paymentError')
                errmsg.scrollIntoView({behavior:"smooth"})
            }

        },200)
    }
    return(
        <main className={'h-[100vh] px-8 md:px-20 overflow-y-hidden snap-y snap-mandatory'} >
            <QuickTickets ref={formRef}/>
            <QuickForm form={formRef.current}/>
        </main>
        )
}