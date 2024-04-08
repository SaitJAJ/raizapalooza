import TicketListItem from "@/components/TicketListItem";

export default function TicketList({tickets,title}){
    return(
        <>
            <h3 className={'text-center text-4xl '}>
                {title} ({tickets.length})
            </h3>
            <table className={'w-full border-2'}>
                <thead>
                <tr>
                    <th className={'grow'}>Name</th>
                    <th className={'grow'}>Email</th>
                    <th className={'grow'}>Tier</th>
                    <th className={'grow'}>View Tickets</th>
                    <th className={'grow'}>Info Page</th>
                </tr>
                </thead>
                <tbody>
                {tickets.map(ticket=>{
                    return(<TicketListItem key={ticket.ticketId} ticket={ticket}/>)
                })}

                </tbody>
            </table>
        </>
        )
}