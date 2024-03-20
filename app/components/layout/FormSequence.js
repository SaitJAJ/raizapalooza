'use client'
import InfoForm from "@/components/InfoForm";
import SquarePayment from "@/components/SquarePayment";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense, useEffect, useRef, useState} from "react";
import Loading from "@/components/Loading";
import TicketBox from "@/components/TicketBox";

export default function FormSequence(){
    const [formData, setFormData] = useState()
    const formRef=useRef()
    const [loading,setLoading] = useState(false)
    const [selected,setSelected]=useState('earlybird')

    useEffect(() => {
        const form = formRef.current;
        form.addEventListener('submit',handleSubmit)
        return()=>{
            form.removeEventListener('submit',handleSubmit)
        }
    }, []);
    const handleSubmit=(e)=>{
        setLoading(true)
        e.preventDefault()
        console.log(e)
        setTimeout(()=>{
        setFormData(new FormData(e.target))
           setLoading(false)
            const payment = document.getElementById('payment')
            payment.scrollIntoView({behavior:"smooth"})
        },200)
    }
    const passScroll=(e)=>{

    }
    const clearForm=()=>{
        formRef.current.reset()
        const ticketbox = document.getElementById('ticketbox')
        ticketbox.scrollIntoView({behavior:"smooth"})
    }
    return(
        <main className={'w-full h-[100vh] px-20 overflow-y-hidden snap-y snap-mandatory'} onWheel={passScroll}>
                <TicketBox selected={selected} setSelected={setSelected} form={formRef.current}/>
                <InfoForm ref={formRef} loading={loading}/>
                <ErrorBoundary fallback={<div className={'w-1/2 my-80 mx-auto text-center border-2 rounded-sm px-20 py-5'}>You are missing the required ENV Variables for square payments.</div>}>
                    <Suspense fallback={<Loading loading={true}/>}>
                        <SquarePayment form={formData}/>
                    </Suspense>
                </ErrorBoundary>

        </main>
    )
}