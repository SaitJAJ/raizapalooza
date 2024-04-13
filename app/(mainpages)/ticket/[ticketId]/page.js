'use server'
import {Suspense} from "react";
import Loading from "@/components/Loading";
import {TicketImage} from "@/components/OrderTickets";
import {getTicketById} from "@/app/lib/ticketServices";
import FancyTitle from "@/components/FancyTitle";
import SearchBar from "@/components/SearchBar";
import Hyperlink from "@/components/Hyperlink";
import RaffleInfo from "@/components/RaffleInfo";

export default async function Page({params,searchParams}) {
    let ticket = await getTicketById(params.ticketId);
    console.log(ticket.ticketId);
    return (
        <div className={'flex justify-around flex-wrap'}>
            <FancyTitle title={'Raffle Ticket'}/>
            <h3 className={'text-center mt-4 w-full'}>
                Present this Ticket to your bartender when you purchase:
            </h3>
            <ul className={'list-disc'}>
               <li>
                    Flight of Shafts
               </li>
               <li>
                   Flight of Select Beers
               </li>
            </ul>
            <Suspense fallback={<Loading loading={true}/>}>
                <div id={ticket.ticketId} className={'flex justify-around w-full'}>
                    <TicketImage ticket={ticket}/>
                </div>
                {/*<QrGenerator ticketId={params.ticketId}/>*/}
            </Suspense>
            <RaffleInfo count={searchParams.count} email={searchParams.email} />
        </div>
    )
}