import TicketList from "@/components/TicketList";

export default function SeparateTickets({tickets}){
    const earlybird = tickets.filter(({tier})=> tier === 'earlybird');
    const door = tickets.filter(({tier})=> tier === 'door');
    const vip = tickets.filter(({tier})=> tier === 'vip');
    const fam = tickets.filter(({tier})=> tier === 'fam');
    const crew = tickets.filter(({tier})=> tier === 'crew');
    const staff = tickets.filter(({tier})=> tier === 'staff');

    return(
        <div>
            <TicketList title={"Early Bird"} tickets={earlybird}/>
            <TicketList title={"Door"} tickets={door}/>
            <TicketList title={"VIP"} tickets={vip}/>
            <TicketList title={"Family"} tickets={fam}/>
            <TicketList title={"Crew"} tickets={crew}/>
            <TicketList title={"Staff"} tickets={staff}/>


        </div>
    )
}