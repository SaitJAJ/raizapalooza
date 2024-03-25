"use client";
import earlybird from '@/tickets/earlybirdTicket.png'
import door from '@/tickets/generalTicket.png'
import Ticket from "@/components/Ticket";
import Image from 'next/image'
import Header from "@/components/Header";
import {useEffect, useRef} from "react";
export default function TicketBox({selected,setSelected}){
    const buttonRef = useRef()
    const goToForm=()=>{
        let form = document.getElementById('infoForm')
        form.scrollIntoView({behavior:"smooth"})
    }
    const selectOne=(id)=>{
        setSelected(id)
        buttonRef.current.focus()
        buttonRef.current.scrollIntoView({behavior:"smooth"})
    }

    return(
        <div className={'h-[100vh] justify-around overflow-y-scroll no-scrollbar grid pt-[8vh] snap-start'} id={'ticketbox'}>
           <Header/>
            <div className={'flex flex-wrap justify-around'} >
                <Ticket selected={selected==='earlybird'} id={'earlybird'} select={()=>selectOne('earlybird')}>
                    <Image alt={'earlybird'} src={earlybird}
                           placeholder={'blur'}
                           priority={true}
                           sizes={ "(max-width: 640px): 200px, (max-width: 768px): 300px,(max-width: 1024px): 375px"}
                            fill
                    />
                </Ticket>
                <Ticket selected={selected==='door'} id={'door'} select={()=>selectOne('door')}>
                    <Image alt={'general'} src={door}
                           priority={true}
                            placeholder={'blur'}
                            sizes={ "(max-width: 640px): 200px, (max-width: 768px): 300px,(max-width: 1024px): 375px"}
                            fill
                    />
                </Ticket>
                <input ref={buttonRef} type={"button"} className={'mx-auto w-2/3 p-8 hover:cursor-pointer hover:outline border-2'} value={'Get Tickets'} onClick={goToForm}/>
            </div>
        </div>
    );
}
