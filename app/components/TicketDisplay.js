"use client";
import {useRef, useState} from "react";
import TextInput from "@/components/TextInput";
import Button from "@/components/Button";
import {useReducer} from "react";
import HiddenInput from "@/components/HiddenInput";
import {updateTicketInfo} from "@/app/lib/ticketServices";
import Loading from "@/components/Loading";
import * as htmlToImage from "html-to-image";

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
export default function TicketDisplay({ ticket, index, count ,children}) {
    const [ticketInit, setTicketInit] = useState(ticket) // Track initial ticket values
    const [ticketInf, ticketDispatch] = useReducer(ticketReducer,ticket,undefined)
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

    // Not working until we find fix for safari enabled devices
    const download = () => {
        const ticketDiv = document.getElementById(ticket.ticketId)
        // console.log(document.getElementById(ticket.ticketId))
        htmlToImage
            .toPng(ticketDiv)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = `Raizapalooza Ticket ${index} of ${count}`;
                link.href = dataUrl;
                link.click();
            })
            .catch((e) => {
                console.log(e);
            });
    };
  return (
    <div className={"flex flex-wrap justify-around border-2 mx-2 my-4 p-2"} key={ticketInf.id}>
      <form ref={formRef} onSubmit={updateInfo} className={"grid w-full justify-around p-2 text-center"}>
          <HiddenInput id={'ticketId'} value={ticketInf.ticketId} hidden/>
          <TextInput label={'Name'} id={'name'} value={ticketInf.name} onChange={e=>ticketDispatch({type:'change',tag:e.target.id,value:e.target.value})}/>
          <TextInput label={'Email'} type={'email'} id={'email'} value={ticketInf.email} onChange={e=>ticketDispatch({type:'change',tag:e.target.id,value:e.target.value})}/>
          <Loading loading={loading}>
              <Button type={'submit'} value={"Update contact Info"}/>
          </Loading>
          <p className={'text-sm text-element-2 h-[1lh]'}>{fieldsMatch(ticketInit,ticketInf,['name','email'])?'':"You have unsaved changes!"}</p>
          {/*<Button onClick={download} value={"Download Ticket"}/>*/}
      </form>
        <p className={"w-full text-center"}>
            {ticketInf.tier} Ticket ({index}/{count})
        </p>
        {children}
    </div>
  );
}
