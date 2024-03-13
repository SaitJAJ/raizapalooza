'use server'
import TicketInfo from "@/components/TicketInfo";
import {getTicketById} from "@/app/lib/ticketServices";
import {Suspense} from "react";
import Loading from "@/components/Loading";

export default async function Page({params}){
    let ticket = await getTicketById(params.ticketId);
    return(
        <>
            <Suspense fallback={<Loading loading={true}/>} >
                <TicketInfo ticket={ticket}/>
            </Suspense>
        </>
    )
}