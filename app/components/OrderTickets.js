'use server'
import {getAllTickets, getOrderTickets} from "@/app/lib/ticketServices";
import TicketListItem from "@/components/TicketListItem";

export default async function OrderTickets({orderId}){
    let tickets = await getOrderTickets(orderId)
    console.log('tickets',tickets)

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