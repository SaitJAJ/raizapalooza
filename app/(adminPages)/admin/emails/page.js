'use server'
import {getAllTickets} from "@/app/lib/ticketServices";
import AllTickets from "@/components/AllTickets";
import TicketList from "@/components/TicketList";

export default async function Page(){
    const allTickets = await getAllTickets();
    return(
        <div>
            <AllTickets title={"All Tickets"} tickets={allTickets}/>
        </div>
    )
}