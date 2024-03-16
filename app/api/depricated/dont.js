import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Ticket from "@/models/Ticket";

export async function GET(request, { params }) {
  try {
    const cookie = cookies().get("role");
    const value = params.paramValue;
    //if user doesnt have cookie, redirect to tickets
    if (!cookie) {
      //where regular scans should be redirected to
      redirect("/tickets", "push");
    }

    //test cookie for bartender

    if (cookie.value === "bartender") {
      //if the paramvalue corrolates with a user, increment raffle
      //filter collections by ticketID
      const filter = { ticketId: value };
      //increment raffle by 1
      const modify = { $inc: { raffle: 1 } };
      //pass filter and modify with {new:true}
      let doc = await Ticket.findOneAndUpdate(filter, modify, { new: true });
      //doc will hold the updated row
      console.log(doc);

      //test cookie for bouncer
    } else if (cookie.value === "bouncer") {
      //if paramValue corrolates with a user, update admission to true
      //filter collections by ticketID
      const filter = { ticketId: value };
      //increment raffle by 1
      const modify = { admission: false };
      //pass filter and modify with {new:true}
      let doc = await Ticket.findOneAndUpdate(filter, modify);
      //doc will hold the old row
      //if doc.admission is false
      if (doc.admission === false) {
        //this qr code has been scanned for admission already
        redirect("/error", "push");
      } else {
        console.log("old\n", doc);
      }
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
