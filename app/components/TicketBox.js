'use client'
import Ticket from "@/components/Ticket";
import Image from 'next/image'
export default function TicketBox({selected,setSelected}){
    const goToForm=()=>{
        let form = document.getElementById('infoForm')
        form.scrollIntoView({behavior:"smooth"})
    }

    return(
        <div className={'h-[100vh] grid pt-[8vh] snap-start'} id={'ticketbox'}>
            <div className={'md:flex grid md:justify-around'} >
                <Ticket selected={selected==='earlybird'} id={'earlybird'} >
                    <Image alt={'earlybird'} src={'/earlybird.png'} fill/>
                </Ticket>
                <Ticket selected={selected==='door'} id={'door'}>
                    <Image alt={'general'} src={'/general.png'} fill/>
                </Ticket>
            </div>
            <input type={"button"} className={'m-auto w-2/3 p-8 hover:cursor-pointer hover:outline'} value={'Get Tickets'} onClick={goToForm}/>
        </div>
    )
}