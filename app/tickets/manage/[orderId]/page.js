import {getOrderTickets} from "@/app/lib/ticketServices";
import CurrentTickets from "@/components/CurrentTickets";
import OrderTickets from "@/components/OrderTickets";

export default async function Page({params}) {
    // const tickets = await getOrderTickets(params.orderId)
    console.log(params)
    return (
        <>
            <OrderTickets orderId={params.orderId}/>
        </>
    )
}