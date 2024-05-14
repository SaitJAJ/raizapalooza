import {getAllRaffleEntries, getAllTickets} from "@/app/lib/ticketServices";
import AllTickets from "@/components/AllTickets";
import EmailTicketListItem from "@/components/EmaiTicketListItem";
import TicketListItem from "@/components/TicketListItem";
import RaffleListItem from "@/components/adminComps/RaffleListItem";
import RaffleComp from "@/components/adminComps/RaffleComp";

export default async function Page() {
    const tickets = await getAllRaffleEntries()
    return (
        <>
            <RaffleComp tickets={tickets}/>
            <table className={'w-full border-2'}>
                <thead>
                <tr>
                    <th className={'grow'}>Name</th>
                    <th className={'grow'}>Email</th>
                    <th className={'grow'}>Tier</th>
                    <th className={'grow'}>Sending</th>
                    <th className={'grow'}>Raffle Entries</th>
                </tr>
                </thead>
                <tbody>
                {Object.values(tickets).map(ticket => {
                    return (<RaffleListItem key={ticket.ticketId} ticket={ticket} />)
                })}

                </tbody>
            </table>
        </>

    )

}