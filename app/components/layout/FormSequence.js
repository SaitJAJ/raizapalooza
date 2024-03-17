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
        setTimeout(()=>{
           setLoading(false)
        },1500)
    }

    return(
        <main className={'w-full '}>
                <TicketBox selected={selected} setSelected={setSelected}/>
                <InfoForm ref={formRef} loading={loading}/>
                <ErrorBoundary fallback={<div className={'w-1/2 my-80 mx-auto text-center border-2 rounded-sm px-20 py-5'}>You are missing the required ENV Variables for square payments.</div>}>
                    <Suspense fallback={<Loading loading={true}/>}>
                        {/*<SquarePayment/>*/}
                    </Suspense>
                </ErrorBoundary>

        </main>
    )
}