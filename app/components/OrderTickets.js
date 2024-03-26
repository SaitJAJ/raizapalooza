'use server'
import {getAllTickets, getOrderTickets} from "@/app/lib/ticketServices";
import TicketDisplay from "@/components/TicketDisplay";
import Image from "next/image";
import QrEarly from "@/public/generatedPNGs/QRTicket.png";
import QrDoor from "@/public/generatedPNGs/QRRegular.png";
import Background from '@/public/background.png'
import Header from "@/components/Header";
import CustomHeader from "@/components/layout/CustomHeader";

export default async function OrderTickets({orderId}){
    let tickets = await getOrderTickets(orderId)
    let ticketBackground = undefined
    switch(tickets[0].tier){
        case('earlybird'):
            ticketBackground = QrEarly;
            break;
        case('door'):
            ticketBackground = QrDoor;
            break;
        default:
            ticketBackground = Background;
    }




    return(
        // <table className={'w-full '}>
        //     <tbody>
        //     {tickets.map(ticket=>{
        //         return (<TicketListItem key={ticket.ticketId} ticket={ticket}/>)
        //     })}
        //     </tbody>
        // </table>
        <>
            <div >
                {/*<Header/>*/}
                <CustomHeader title={"Raizapalooza"}/>
                <div className={'h-[100vh] grid'}>
                    <h2 className={'w-full text-center text-6xl pt-5 '}>Tickets Acquired!</h2>
                    <p className={'px-10 md:px-40'}>
                        You will receive an email with your tickets around a week before <span className={'font-tan-headline'}>Raizapalooza</span>.
                    </p>
                    <p className={'text-right px-10 md:px-40'}>
                        You may also download your tickets below, or change the contact info to have them sent to someone else!
                    </p>
                    <p className={'text-center p-2 text-2xl animate-bounce'}>
                        ↓
                        ↓
                        ↓
                        ↓
                    </p>
                </div>

                {tickets.map((ticket,index)=>{
                    return (
                        <TicketDisplay key={ticket.id} ticket={ticket} index={index+1} count={tickets.length}/>
                    )
                })}
            </div>
           <div className={'float fixed'}>
               <Image
                   id={'ticketImage'}
                   src={ticketBackground}
                   width={600}
                   height={900}
                   alt="Picture of the author"
               />
           </div>
        </>
    )
}