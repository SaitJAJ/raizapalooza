'use client'
import Ticket from "@/components/Ticket";
import {useEffect, useState} from "react";

export default function TicketBox({selected,setSelected}){

    return(
        <div className={'flex h-[100vh] justify-around w-full'}>
            <Ticket selected={selected==='earlybird'} id={'earlybird'} select={()=>setSelected('earlybird')}>
                <p className={'text-element-1'}>Text</p>
            </Ticket>
            <Ticket selected={selected==='door'} id={'door'} select={()=>setSelected('door')}>
                <p className={'text-element-1'}>Text</p>
            </Ticket>
        </div>
    )
}