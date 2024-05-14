'use client'
import Hyperlink from "@/components/Hyperlink";

export default function RaffleListItem({ticket}){
    return(
        <tr>
            <td className={"text-wrap"}>{ticket.name}</td>
            <td className={"text-wrap"}>{ticket.email}</td>
            <td className={'text-center'}>
                {ticket.tier}
            </td>
            <td className={"text-wrap"}>
                <Hyperlink href={'/admin/tickets/generate/'+ticket.ticketId}>Ticket</Hyperlink>
            </td>
            <td className={"text-wrap text-center"}>
                {ticket.raffle}
            </td>
        </tr>
    )
}