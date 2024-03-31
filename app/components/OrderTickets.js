'use server'
import getTicketBackground, {genTicket, getOrderTickets} from "@/app/lib/ticketServices";
import TicketDisplay from "@/components/TicketDisplay";
import CustomHeader from "@/components/layout/CustomHeader";
import {Suspense} from "react";
import Loading from "@/components/Loading";

export async function TicketImage({ticket}){
    let background = await getTicketBackground(ticket.tier)
    let printTickets =  await genTicket({ticket, background});
    // console.log(printTickets)
    return(
        <div>{
                printTickets.ticketBlob?
                    // eslint-disable-next-line @next/next/no-img-element
                    <img alt={'text'} src={printTickets.ticketBlob} className={'max-h-[600px] border-[6px] rounded-[8px]'} />
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
    return(
        <>
            <div >
                <CustomHeader title={"Raizapalooza"}/>
                <div className={'h-[100vh] grid'}>
                    <h2 className={'w-full text-center text-6xl pt-5 '}>Tickets Acquired!</h2>
                    <p className={'px-4 md:px-40'}>
                        We have sent you an email with your receipt, copies of your tickets and other details important for <span className={'font-tan-headline'}>Raizapalooza</span>! Dont forget to check your email!
                    </p>
                    <p className={'px-10 md:px-40 text-center'}>
                        You will receive another email with copies of your tickets, and final event details around a week before <span className={'font-tan-headline'}>Raizapalooza</span>.
                    </p>
                    <p className={'text-right px-10 md:px-40'}>
                        You may also change the contact info of individual tickets below, to have them sent to someone else!
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
                                    <TicketImage ticket={ticket} />
                                </div>
                            </TicketDisplay>
                        )
                    })}
                </Suspense>
                <div className={'text-center '}>
                    If you have any questions, comments or concerns: Please reach out to use immediately at Raizapalooza@gmail.com
                </div>
            </div>
        </>
    )
}