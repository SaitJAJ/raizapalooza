"use client";

import Hyperlink from "@/components/Hyperlink";
const InfoBlock=({label, value})=>{

    return(
        <div className={'flex justify-between border-2 p-2'}>
            <p className={''}>{label}</p>
            <p className={"text-right min-w-[250px]"}>{value?value:<span className={'text-element-1'}>[Not Provided]</span>}</p>
        </div>
    )
}
export default function TicketInfo({ ticket }) {
  return (
    <div className={"grid mx-16"}>
        <InfoBlock label={'Name'} value={ticket.name}/>
        <InfoBlock label={'Email'} value={ticket.email}/>
        <InfoBlock label={'Phone'} value={ticket.phone}/>
        <InfoBlock label={'Tier'} value={ticket.tier}/>
        <InfoBlock label={'Admission used'} value={ticket.admission?"Scanned":"Not Scanned"}/>
        <InfoBlock label={'Raffle Tickets'} value={ticket.raffle}/>
        <InfoBlock label={'Birthday'} value={ticket.birthday.toDateString()}/>
        <InfoBlock label={'Order Id'} value={ticket.orderId}/>
        <div className={"w-full"}>
            <Hyperlink href={"/admin/tickets/generate/" + ticket.ticketId}>
              View Ticket
            </Hyperlink>
      </div>
        {ticket.paymentId!=null?
            <div>
                <h3 className={'text-2xl'}>Receipt Info</h3>
                <InfoBlock label={'Payment ID'} value={ticket.paymentId}/>
                <InfoBlock label={'Payment Date'} value={ticket.paymentDate.toLocaleString()}/>
                <InfoBlock label={'Payment Type'} value={ticket.paymentType}/>
                <Hyperlink href={ticket.receiptUrl}>View Square Receipt</Hyperlink>
            </div>
            :
            null
        }
    </div>
  );
}
