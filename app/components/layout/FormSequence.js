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

    // useEffect(() => {
    //     const form = formRef.current;
    //     form.addEventListener('submit',handleSubmit)
    //     return()=>{
    //         form.removeEventListener('submit',handleSubmit)
    //     }
    // }, []);
    const handleSubmit=(e)=>{
        setLoading(true)
        e.preventDefault()
        setFormData(new FormData(formRef.current))
        setTimeout(()=>{
           setLoading(false)
            const payment = document.getElementById('payment')
            payment.scrollIntoView({behavior:"smooth"})
        },200)
    }
    useEffect(() => {
        if(formData){
            // console.log(formData.get('name'))
        }
    }, [formData]);
    const passScroll=(e)=>{

    }
    const clearAll=()=>{
        let form = formRef.current
        form.reset()
        const ticketbox = document.getElementById('ticketbox')
        ticketbox.scrollIntoView({behavior:"smooth"})
        setTimeout(()=>{
            setFormData(null)
        },600)
    }
    const scrollBack=()=>{
        const form = document.getElementById('infoForm')
        form.scrollIntoView({behavior:"smooth"})
        setTimeout(()=>{
            setFormData(null)
        },600)

    }
    return(
        <main className={' h-[100vh] px-8 md:px-20 overflow-y-hidden '} >
                <TicketBox selected={selected} setSelected={setSelected} form={formRef.current}/>
                <InfoForm ref={formRef} loading={loading} clearAll={clearAll}/>
                <ErrorBoundary fallback={<div className={'w-1/2 my-80 mx-auto text-center border-2 rounded-sm px-20 py-5'}>You are missing the required ENV Variables for square payments.</div>}>
                    <Suspense fallback={<Loading loading={true}/>}>
                        {formData?<SquarePayment form={formData} scrollBack={scrollBack} clearAll={clearAll}/>:null}
                    </Suspense>
                </ErrorBoundary>

        </main>
    )
}