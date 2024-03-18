import { isRedirectError } from "next/dist/client/components/redirect";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Ticket from "@/models/Ticket";
import mongoose from 'mongoose';
mongoose.connect(process.env.MONGODB_URI);

export async function GET(request) {
  try {
    const useHeader = headers(request);
    const ticketId = useHeader.get("ticketId");
    const auth = useHeader.get("auth");
    if (auth === "bartender") {
      // finds ticket from DB and if it does not exist, send status: 500
      // if ticket already entered, send status: 201
      const foundTicket = await Ticket.findOne({ticketId: ticketId});
      if (!foundTicket) {
        console.log("Ticket does not exist in the database");
        return Response.json({ status: 500 });
      } else {
        //filter collections by ticketID
        const filter = { ticketId: ticketId };
        //increment raffle by 1
        const modify = { $inc: { raffle: 1 } };
        //pass filter and modify with {new:true}
        const updatedTicket = await Ticket.findOneAndUpdate(filter, modify, { new: true });
        console.log(updatedTicket);
        // ticket has been updated in DB and returns number of raffle tickets and status: 200
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

    return Response.json({ status: 500 });
  }
}