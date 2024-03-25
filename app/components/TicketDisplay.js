"use client";
import TicketGen from "@/components/TicketGen";
import {useRef, useState} from "react";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {useReducer} from "react";
import HiddenInput from "@/components/HiddenInput";
import {updateTicketInfo} from "@/app/lib/ticketServices";
import {useRouter} from "next/navigation";
import Loading from "@/components/Loading";

const ticketReducer = (state,action)=>{
    switch (action.type) {
        case('change'):
            return(
                {
                    ...state,
                    [action.tag]: action.value,

                }
            )
    }
}
const fieldsMatch=(a,b,fields)=>{
    for(let field of fields){
        if(a[field] !== b[field]){
            return false
        }
    }
    return true
}
export default function TicketDisplay({ ticket, index, count , updateTickets}) {
    const [ticketInit, setTicketInit] = useState(ticket)
    const [ticketInf, ticketDispatch] = useReducer(ticketReducer,ticket,undefined)
    const router = useRouter()
    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const updateInfo=async (e) => {
        setLoading(true)
        e.preventDefault();
        let formData = new FormData(formRef.current)
        let ticket = await updateTicketInfo(formData)
        setTicketInit(ticket)
        setLoading(false)
    }

  return (
    <div className={"flex flex-wrap justify-around border-2 m-2 p-2"} key={ticketInf.id}>
      <form ref={formRef} onSubmit={updateInfo} className={"grid w-full justify-around p-2 text-center"}>
          <HiddenInput id={'ticketId'} value={ticketInf.ticketId} hidden/>
          <TextInput label={'Name'} id={'name'} value={ticketInf.name} onChange={e=>ticketDispatch({type:'change',tag:e.target.id,value:e.target.value})}/>
          <TextInput label={'Email'} type={'email'} id={'email'} value={ticketInf.email} onChange={e=>ticketDispatch({type:'change',tag:e.target.id,value:e.target.value})}/>
          <Loading loading={loading}>
              <Button type={'submit'} value={"Update contact Info"}/>
          </Loading>
          <p className={'text-sm text-element-2 h-[1lh]'}>{fieldsMatch(ticketInit,ticketInf,['name','email'])?'':"You have unsaved changes!"}</p>
      </form>
        <p className={"w-full text-center"}>
            {ticketInf.tier} Ticket ({index}/{count})
        </p>
        <TicketGen
            ticketId={ticket.ticketId}
            ticketIndex={index}
            ticketCount={count}
            ticketTier={ticket.tier}
        />
    </div>
  );
}
