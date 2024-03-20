'use client'
import Ticket from "@/components/Ticket";
import {useEffect, useState} from "react";

export default function TicketBox({selected,setSelected}){
    const goToForm=()=>{
        let form = document.getElementById('infoForm')
        form.scrollIntoView({behavior:"smooth"})
    }

    return(
        <div className={'flex min-h-[100vh] justify-around w-full snap-center'} id={'ticketbox'}>
            <Ticket selected={selected==='earlybird'} id={'earlybird'} select={()=>setSelected('earlybird')}>
                <p className={'text-element-1'}>Text</p>
                <input type={"button"} value={'Go To Form'} onClick={goToForm}/>
            </Ticket>
            <Ticket selected={selected==='door'} id={'door'} select={()=>setSelected('door')}>
                <p className={'text-element-1'}>Text</p>
                <input type={"button"} value={'Go To Form'} onClick={goToForm}/>
            </Ticket>
        </div>
    )
}