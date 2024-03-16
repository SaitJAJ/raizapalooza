"use client";
import Button from "@/components/Button";
import Hyperlink from "@/components/Hyperlink";

export default function TicketInfo({ ticket }) {
  //console.log(ticket.admission);
  return (
    <div className={"flex flex-wrap w-full justify-around"}>
      <p className={"w-2/5 p-8"}>{ticket.name}</p>
      <p className={"w-2/5 p-8"}>{ticket.email}</p>
      <p className={"w-2/5 p-8"}>{ticket.phoneNumber}</p>
      <p className={"w-1/5 p-8"}>{ticket.tier}</p>
      <p className={"w-1/5 p-8"}>{ticket.raffle}</p>
      <p className={"w-1/5 p-8"}>{ticket.birthday}</p>

      <div className={"w-full"}>
        <Hyperlink href={"/tickets/generate/" + ticket.ticketId}>
          View QR Code
        </Hyperlink>
      </div>
    </div>
  );
}
