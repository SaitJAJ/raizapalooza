'use client'
import {useRouter} from 'next/navigation'
import Hyperlink from "@/components/Hyperlink";
export default function TicketListItem({ticket}){
    console.log(ticket)
    const router = useRouter()

    return(
        <tr className={'w-full'} onClick={()=>router.replace('/tickets/generate/'+ticket.ticketId,'forward')}>
            <td>{ticket.name}</td>
            <td>{ticket.email}</td>
            <td>
                <Hyperlink href={'/tickets/generate/'+ticket.ticketId}>View QR Code</Hyperlink>
            </td>
            <td>
                <Hyperlink href={'/tickets/info/'+ticket.ticketId}>View Ticket Info</Hyperlink>
            </td>
        </tr>
    )
}