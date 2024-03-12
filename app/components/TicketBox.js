'use client'
import Ticket from "@/components/Ticket";
import {useEffect, useState} from "react";

export default function TicketBox(){
    const [selected,setSelected]=useState(true)

    return(
        <div className={'flex justify-around w-full'}>
            <Ticket selected={selected} select={()=>setSelected(!selected)}/>
            <Ticket selected={!selected} select={()=>setSelected(!selected)}/>
        </div>
    )
}