'use server'
import {getAllTickets, getOrderTickets} from "@/app/lib/ticketServices";
import TicketListItem from "@/components/TicketListItem";
import QrGenerator from "@/components/QrGenerator";
import Button from "@/components/Button";
import TicketDisplay from "@/components/TicketDisplay";

export default async function OrderTickets({orderId}){
    let tickets = await getOrderTickets(orderId)
    console.log('tickets',tickets)

    return(
        // <table className={'w-full '}>
        //     <tbody>
        //     {tickets.map(ticket=>{
        //         return (<TicketListItem key={ticket.ticketId} ticket={ticket}/>)
        //     })}
        //     </tbody>
        // </table>
        <div className={'border-2 p-2'}>
            {tickets.map((ticket,index)=>{
                return (
                    <TicketDisplay key={ticket.id} ticket={ticket} index={index+1} count={tickets.length}/>
                )
            })}
        </div>
    )
}