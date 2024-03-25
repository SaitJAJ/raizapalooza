"use client";
import TicketGen from "@/components/TicketGen";

export default function TicketDisplay({ ticket, index, count }) {
  return (
    <div className={"flex flex-wrap justify-around border-2"} key={ticket.id}>
      <div className={"flex flex-wrap w-full p-2 text-center"}>
        <p className={"grow"}>{ticket.name}</p>
        <p className={"grow"}>{ticket.tier}</p>
        <p className={"grow "}>{ticket.email}</p>
        <p className={"grow"}>Birthday: {ticket.birthday.toDateString()}</p>
        <p className={"grow"}>
          Ticket ({index}/{count})
        </p>
      </div>
      <div className="flex flex-col">
        <div
          className={
            'h-[900px] bg-[url("/tickets/qu")] w-[605px] border-2 flex  '
          }
        >
          <TicketGen
            ticketId={ticket.ticketId}
            ticketTier={ticket.tier}
            initName={ticket.name}
            initEmail={ticket.email}
          />
        </div>
      </div>
    </div>
  );
}
