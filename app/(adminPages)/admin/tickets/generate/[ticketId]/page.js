"use server";
import {Suspense} from "react";
import Loading from "@/components/Loading";
import {TicketImage} from "@/components/OrderTickets";
import {getTicketById} from "@/app/lib/ticketServices";

export default async function Page({ params }) {
    let ticket = await getTicketById(params.ticketId)
    return(
        <>
            <Suspense fallback={<Loading loading={true}/>}>
                <div id={ticket.ticketId}>
                    <TicketImage ticket={ticket}/>
                </div>
                {/*<QrGenerator ticketId={params.ticketId}/>*/}
            </Suspense>
        </>
    )
}
