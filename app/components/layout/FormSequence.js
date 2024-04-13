'use client'
import Header from '../../components/Header'
import InfoForm from "@/components/InfoForm";
import SquarePayment from "@/components/SquarePayment";
import {ErrorBoundary} from "react-error-boundary";
import {Suspense, useEffect, useRef, useState} from "react";
import Loading from "@/components/Loading";
import TicketBox from "@/components/TicketBox";
import {logPaymentForm} from "@/app/lib/squareServices";

const allMonths= [
    {value:"January",id:1},
    {value:"February",id:2},
    {value:"March",id:3},
    {value:"April",id:4},
    {value:"May",id:5},
    {value:"June",id:6},
    {value: "July",id:7},
    {value:"August",id:8},
    {value:"September",id:9},
    {value:"October",id:10},
    {value:"November",id:11},
    {value:"December",id:12}
];
export default function FormSequence({code = 'door'}){
    const [formData, setFormData] = useState()
    const formRef=useRef()
    const [loading,setLoading] = useState(false)
    const [selected,setSelected]=useState(code)

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
    useEffect(() => {
        if(formData){
            // console.log(formData.get('name'))
        }
    }, [formData]);
    const clearAll=()=>{
        let form = formRef.current
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
        <>
                <main className={'h-[100vh] px-8 md:px-20 overflow-y-hidden snap-y snap-mandatory'} >
                <TicketBox selected={selected} setSelected={setSelected} form={formRef.current}/>
                <InfoForm ref={formRef} loading={loading} tier={selected} clearAll={clearAll}/>
                <ErrorBoundary onError={(e)=>console.log(e)} fallback={<div id={'paymentError'} className={'w-1/2 my-80 mx-auto text-center border-2 rounded-sm px-20 py-5'}>You are missing the required ENV Variables for square payments.</div>}>
                    <Suspense fallback={<Loading loading={true}/>}>
                        {formData?<SquarePayment form={formData} scrollBack={scrollBack} clearAll={clearAll}/>:null}
                    </Suspense>
                </ErrorBoundary>

            </main>
        </>
    )
}