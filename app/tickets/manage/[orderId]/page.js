import {getOrderTickets} from "@/app/lib/ticketServices";
import CurrentTickets from "@/components/CurrentTickets";
import OrderTickets from "@/components/OrderTickets";

export default async function Page({params}) {
    return (
        <>
            <OrderTickets orderId={params.orderId}/>
        </>
    )
}