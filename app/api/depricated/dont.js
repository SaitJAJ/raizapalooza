import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";

export async function GET(request) {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const cookie = cookies().get("role");
    //if user doesnt have cookie, redirect to tickets
    if (!cookie) {
      //where regular scans should be redirected to
      redirect("/tickets", "push");
    }

    //test cookie for bartender
    if (cookie.value === "bartender") {
      console.log("Bartender here");

      const foundTicket = await Ticket.findOne({ticketId: request.headers.get("ticketId")});
      foundTicket.raffle = foundTicket.raffle += 1;
      await foundTicket.save();
      console.log(foundTicket);
      return Response.json(foundTicket.raffle, {status: 200});

      //test cookie for bouncer
    } else if (cookie.value === "bouncer") {
      console.log("Bouncer here");

      const foundTicket = await Ticket.findOne({ticketId: request.headers.get("ticketId")});
      
      // if not admitted yet, change admission to TRUE to signify they have entered
      if (foundTicket && foundTicket.admission === false) {
        foundTicket.admission = true;
      } else {
        return Response.json({status: 201});
      }

      await foundTicket.save();
      return Response.json(foundTicket, {status: 200});
      
    } else {
      redirect("/tickets", "push");
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.log(error);

    return Response.json(400);
  }
}
