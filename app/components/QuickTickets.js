'use client'
import Header from "@/components/Header";
import Ticket from "@/components/Ticket";
import Image from "next/image";
import door from "@/tickets/generalTicket.png";
import HiddenInput from "@/components/HiddenInput";
import NumberInput from "@/components/NumberInput";
import {useReducer} from "react";
const goToForm=()=>{
    let form = document.getElementById('quickForm')
    form.scrollIntoView({behavior:"smooth"})
}
const costReducer = (state,action)=>{
    switch (action.type){
        case('calc'):
            return(20*action.quant)
    }
}
export default function QuickTickets(){
    const [cost,costDispatch] = useReducer(costReducer,20,undefined)
    const formId = 'ticketbox'
    return(
        <form className={'min-h-[100vh] justify-around overflow-y-scroll no-scrollbar grid pt-[8vh] snap-start'} id={'ticketbox'}>
            <Header/>
            <div className={'flex flex-wrap justify-around'} >
                <Ticket selected={true} id={'door'}>
                    <Image alt={'general'} src={door}
                           priority={true}
                           placeholder={'blur'}
                           sizes={ "(max-width: 640px): 200px, (max-width: 768px): 300px,(max-width: 1024px): 375px"}
                           fill
                    />
                </Ticket>
                <NumberInput label={'Ticket Quantity'} formId={formId} id={"quant"} onChange={quant=>costDispatch({type:'calc',quant:quant})} min={1} max={8}>
                    <HiddenInput id={'cost'} value={cost} hidden={false} label={`$${cost} CAD`}/>
                </NumberInput>
                <input type={"button"} className={'mx-auto w-2/3 p-8 hover:cursor-pointer hover:outline border-2'} value={'Get Tickets'} onClick={goToForm}/>
            </div>
        </form>
    )
}