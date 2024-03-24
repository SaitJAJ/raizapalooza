'use server'
import {getAllTickets, getOrderTickets} from "@/app/lib/ticketServices";
import TicketListItem from "@/components/TicketListItem";
import QrGenerator from "@/components/QrGenerator";

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
            {tickets.map(ticket=>{
                return (
                    <div className={'w-[500px] flex flex-wrap justify-around border-2 h-[600px]'} key={ticket.id}>
                        <div className={'flex flex-wrap w-full text-center'}>
                            <p className={' w-2/3'}>{ticket.name}name</p>
                            <p className={' w-1/3'}>{ticket.tier}</p>
                            <p className={' w-1/3'}>{ticket.name}name</p>
                            <p className={' grow'}>{ticket.name}name</p>
                            <p className={' grow'}>{ticket.name}name</p>
                        </div>
                        <QrGenerator ticketId={ticket.id}/>
                    </div>
                )
            })}
        </div>
    )
}