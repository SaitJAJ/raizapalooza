import { isRedirectError } from "next/dist/client/components/redirect";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Ticket from "@/models/Ticket";
import mongoose from 'mongoose';

export async function GET(request) {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const useHeader = headers(request);
    const ticketId = useHeader.get("ticketId");
    const auth = useHeader.get("auth");
    if (auth === "bartender") {
      //filter collections by ticketID
      //const filter = { ticketId: ticketId };
      //increment raffle by 1
      //const modify = { $inc: { raffle: 1 } };
      //pass filter and modify with {new:true}
      //let doc = await Ticket.findOneAndUpdate(filter, modify, { new: true });
      //doc will hold the updated row
      const foundTicket = await Ticket.findOne({ticketId: ticketId});
      if (!foundTicket) {
        console.log("Found Ticket is " + foundTicket);
        return Response.json({ status: 500 });
      } else {
        foundTicket.raffle = foundTicket.raffle += 1;
        await foundTicket.save();
        console.log(foundTicket);
        return Response.json({ 
          raffle: foundTicket.raffle,
          status: 200 
        });
      }
      // console.log(doc);
      // if (!doc.raffle) {
      //   return Response.json({ status: 500 });
      // } else {
      //   //right now return the doc in the future we could just send the old raffle number and the new raffle number
      //   return Response.json(doc.raffle, { status: 200 });
      // }
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