import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import Ticket from "@/models/Ticket";
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

export async function GET(request) {
  try {
    // gets ticketID and auth (bouncer/bartender) from request header
    const useHeader = headers(request);
    const ticketId = useHeader.get("ticketId");
    const auth = useHeader.get("auth");
    
    if (auth === "bouncer") {
      // finds ticket from DB and if it does not exist, send status: 500
      // if ticket already entered, send status: 201
      const foundTicket = await Ticket.findOne({ticketId: ticketId});
      if (!foundTicket)  {
        console.log("Ticket not found");
        return Response.json({ status: 500 });
      } else if (foundTicket.admission === false) {
        console.log("Ticket has already entered event");
        return Response.json({ status: 201 });
      } else {
        //filter collections by ticketID
        const filter = { ticketId: ticketId };
        const modify = { admission: false };
        //pass filter and modify with {new:true}
        const updatedTicket = await Ticket.findOneAndUpdate(filter, modify);
        console.log(updatedTicket);
        // this ticket has now been updated to entered in the DB
        // sends status: 200 
        return Response.json({ 
          status: 200
        });
      }
    } else {
      // wrong auth in header
      redirect("/tickets", "push");
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.log(error);

    return Response.json("Something went wrong", { status: 500 });
  }
}
