import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Ticket from "@/models/Ticket";
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

export async function GET(request) {
  try {
    const useHeader = headers(request);
    const ticketId = useHeader.get("ticketId");
    const auth = useHeader.get("auth");
    
    if (auth === "bouncer") {      
      const foundTicket = await Ticket.findOne({ticketId: ticketId});
      if (!foundTicket || foundTicket.admission === false) {
        console.log("Ticket has already entered event");
        return Response.json({ status: 201 });
      } else {
        //filter collections by ticketID
        const filter = { ticketId: ticketId };
        const modify = { admission: false };
        //pass filter and modify with {new:true}
        const updatedTicket = await Ticket.findOneAndUpdate(filter, modify);
        console.log(updatedTicket);
        //this ticket has now been scanned
        return Response.json({ 
          raffle: updatedTicket.raffle, 
          status: 200
        });
      }
    } else {
      //wrong auth in header
      redirect("/tickets", "push");
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.log(error);

    return Response.json("Something went wrong", { status: 200 });
  }
}
