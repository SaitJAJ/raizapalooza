import {EmailWrapper} from "@/emailTemplates/EmailWrapper";
import {Heading, Img,Text} from "@react-email/components"
const TicketEmail=({name, ticketArray})=>{
    return(
        <EmailWrapper>
            <Heading>Raizapalooza Tickets!</Heading>
            <Text>Hello {name}</Text>
            {Object.values(ticketArray).map(ticket=>{
                return (
                    <Img key={ticket.ticketId} alt={"Ticket "+ticket.ticketId} src={'public/generatedPNGs/doorTicket.png'} width={'600'} height={'900'} />
                )
            })}
        </EmailWrapper>
    )
}
export default TicketEmail;