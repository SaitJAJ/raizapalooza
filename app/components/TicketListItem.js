'use client'
import Hyperlink from "@/components/Hyperlink";
export default function TicketListItem({ticket}){

    return(
        <tr className={'w-full h-[2lh]'}>
            <td className={"text-wrap"}>{ticket.name}</td>
            <td className={"text-wrap"}>{ticket.email}</td>
            <td className={'text-center'}>
                {ticket.tier}
            </td>
            <td className={"text-wrap"}>
                <Hyperlink href={'/admin/tickets/generate/'+ticket.ticketId}>Ticket</Hyperlink>
            </td>
            <td className={"text-wrap"}>
                <Hyperlink href={'/admin/tickets/info/'+ticket.ticketId}>View Ticket Info</Hyperlink>
            </td>
        </tr>
    )
}