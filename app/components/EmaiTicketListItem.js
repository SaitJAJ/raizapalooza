'use client'
import Hyperlink from "@/components/Hyperlink";
import Loading from "@/components/Loading";
export default function EmailTicketListItem({ticket,loading}){

    return(
        <tr className={'w-full h-[2lh]'}>
            <td className={"text-wrap"}>{ticket.name}</td>
            <td className={"text-wrap"}>{ticket.email}</td>
            <td className={'text-center'}>
                {ticket.tier}
            </td>
            <td className={"text-wrap"}>
                <Loading loading={loading}/>
            </td>
        </tr>
    )
}