'use server'
import TicketList from "@/components/TicketList";
import {getAllTickets} from "@/app/lib/ticketServices";
import {Suspense} from "react";
import Loading from "@/components/Loading";

export default async function Page(){
    const tickets = getAllTickets()
    return(
        <div className={'w-full h-[100vh] p-8'}>
            {/*<SearchBar/>*/}
            <div className={'flex justify-between'}>
                <p>There are ({(await tickets).length}) tickets so far!</p>
            </div>
            <Suspense fallback={<Loading loading={true}/>}>
                <TicketList tickets={ await tickets}/>
            </Suspense>
        </div>
    )
}