'use server'
import {getAllTickets} from "@/app/lib/ticketServices";
import TicketListItem from "@/components/TicketListItem";

export default async function CurrentTickets(){
    let tickets = await getAllTickets()
    // console.log(tickets)
    return(
        <table className={'w-full '}>
            <tbody>
            {tickets.map(ticket=>{
                return (<TicketListItem key={ticket.ticketId} ticket={ticket}/>)
            })}
            </tbody>
        </table>
    )
}