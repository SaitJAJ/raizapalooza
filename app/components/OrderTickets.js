'use server'
import {genTicket, getAllTickets, getOrderTickets} from "@/app/lib/ticketServices";
import TicketDisplay from "@/components/TicketDisplay";
import CustomHeader from "@/components/layout/CustomHeader";
import {Suspense} from "react";
import Loading from "@/components/Loading";

export async function TicketImage(ticket){
    let printTickets =  await genTicket(ticket);
    // console.log(printTickets)
    return(
        <div >{
                printTickets.ticketBlob?
                    // eslint-disable-next-line @next/next/no-img-element
                    <img alt={'text'} src={printTickets.ticketBlob} className={'max-h-[600px]'} />
                :
                    <div className={'text-center grid w-full h-[400px]'}>
                        <p className={''}>Something went wrong with the ticket display, but your ticket still exists!</p>
                        <p>We will send you the event details a week before the event! </p>
                        <p></p>
                    </div>
            }
        </div>
    )
}
export default async function OrderTickets({orderId}){
    let tickets = await getOrderTickets(orderId)
    let background = undefined
    switch(tickets[0].tier){
        case('earlybird'):
            background = 'public/generatedPNGs/earlybirdTicket.png';
            break;
        case('door'):
            background = 'public/generatedPNGs/doorTicket.png';
            break;
        default:
            background = 'public/generatedPNGs/doorTicket.png';
    }
    return(
        <>
            <div >
                <CustomHeader title={"Raizapalooza"}/>
                <div className={'h-[100vh] grid'}>
                    <h2 className={'w-full text-center text-6xl pt-5 '}>Tickets Acquired!</h2>
                    {/*<p className={'px-10 md:px-40'}>*/}
                    {/*    We have sent you an email with your receipt, copies of your tickets and other details important for <span className={'font-tan-headline'}>Raizapalooza</span>! */}
                    {/*</p>*/}
                    <p className={'px-10 md:px-40'}>
                        You will receive an email with copies of your tickets, and other event details around a week before <span className={'font-tan-headline'}>Raizapalooza</span>.
                    </p>
                    <p className={'text-right px-10 md:px-40'}>
                        You may also download your tickets below, and/or change the contact info to have them sent to someone else!
                    </p>
                    <p className={'text-center p-2 text-2xl animate-bounce'}>
                        ↓
                        ↓
                        ↓
                        ↓
                    </p>
                </div>
                <Suspense fallback={<Loading loading={true}/>}>
                    {tickets.map((ticket,index)=>{
                        return (
                            <TicketDisplay key={ticket.id} ticket={ticket} index={index+1} count={tickets.length}>
                                <div id={ticket.ticketId}>
                                    <TicketImage ticket={ticket} background={background} />
                                </div>
                            </TicketDisplay>
                        )
                    })}
                </Suspense>
            </div>
        </>
    )
}