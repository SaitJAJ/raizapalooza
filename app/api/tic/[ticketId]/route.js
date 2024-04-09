import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";

export async function GET(request) {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const requestHeaders = new Headers(request.headers);
    const auth = requestHeaders.get("auth");
    const ticketId = requestHeaders.get("ticketId").split("/")[3];
    console.log(auth, ticketId);
    if (auth === "bartender") {
      //filter collections by ticketID

      //temp code for test database
      const filter = { ticketId: "1a7d6a02-eaf4-4029-a817-9ccc5d1fac0f" };
      //const filter = { ticketId: ticketId };

      //increment raffle by 1
      const modify = { $inc: { raffle: 1 } };
      //pass filter and modify with {new:true}
      let doc = await Ticket.findOneAndUpdate(filter, modify, { new: true });
      //doc will hold the updated row
      console.log(doc);
      //right now return the doc in the future we could just send the old raffle number and the new raffle number
      return Response.json("New raffle number: " + doc.raffle);
    } else if (auth === "bouncer") {
      //filter collections by ticketID

      //temp code for test database
      const filter = { ticketId: "1a7d6a02-eaf4-4029-a817-9ccc5d1fac0f" };
      //const filter = { ticketId: ticketId };

      //increment raffle by 1
      const modify = { admission: false };
      //pass filter and modify with {new:true}
      let doc = await Ticket.findOneAndUpdate(filter, modify);
      //doc will hold the old row
      //if doc.admission is false
      if (doc.admission === false) {
        //this ticket has already been scanned
        return Response.json("Do not allow");
      } else {
        console.log("old\n", doc);
        //this ticket has now been scanned
        return Response.json("allow");
      }
    } else {
      //wrong auth in header
      redirect("/tickets", "push");
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.error(error);
  }
}
