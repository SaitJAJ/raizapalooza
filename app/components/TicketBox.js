"use client";
import Ticket from "@/components/Ticket";
import Image from 'next/image'
import Header from "@/components/Header";
export default function TicketBox({selected,setSelected}){
    
    const goToForm=()=>{
        let form = document.getElementById('infoForm')
        form.scrollIntoView({behavior:"smooth"})
    }

    return(
        <div className={'h-[100vh] overflow-y-scroll grid pt-[8vh] snap-start'} id={'ticketbox'}>
           <Header/>
            <div className={'md:flex grid md:justify-around'} >
                <Ticket selected={selected==='earlybird'} id={'earlybird'} select={()=>setSelected('earlybird')}>
                    <Image alt={'earlybird'} src={'/tickets/earlybirdTicket.png'}
                           // width={600} height={900}
                        fill
                    />
                </Ticket>
                <Ticket selected={selected==='door'} id={'door'} select={()=>setSelected('door')}>
                    <Image alt={'general'} src={'/tickets/generalTicket.png'}
                           // width={600} height={900}
                        fill
                    />
                </Ticket>
            </div>
            <input type={"button"} className={'m-auto w-2/3 p-8 hover:cursor-pointer hover:outline'} value={'Get Tickets'} onClick={goToForm}/>
        </div>
    );
}
