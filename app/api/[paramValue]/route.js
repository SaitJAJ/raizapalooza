import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";

export async function GET(request, { params }) {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const cookie = cookies().get("role");
    const value = params.paramValue;
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

      //test cookie for bouncer
    } else if (cookie.value === "bouncer") {
      console.log("Bouncer here");

      const foundTicket = await Ticket.findOne({ticketId: request.headers.get("ticketId")});
      
      if (foundTicket.admission === false) {
        foundTicket.admission = true;
      } else {
        console.log("ALREADY ADMITTED");
      }
      
      await foundTicket.save();
      console.log(foundTicket);
      
    } else {
      redirect("/tickets", "push");
    }

    return Response.json(
      { value: value, cookie: cookie.value },
      { status: 200 }
    );
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    console.log(error);

    return Response.json("Something went wrong", { status: 200 });
  }
}
