import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";

export async function POST(request) {
  try {
    mongoose.connect(process.env.MONGODB_URI);
    const formData = await request.formData();
    const auth = formData.get("auth");
    const ticketId = request.nextUrl.pathname.split("/")[3];
    console.log(auth, ticketId);

    if (auth === "bartender") {
      //filter collections by ticketID
      const filter = { ticketId: ticketId };

      //increment raffle by 1
      const modify = { $inc: { raffle: 1 } };

      //pass filter and modify with {new:true}
      let doc = await Ticket.findOneAndUpdate(filter, modify, { new: true });

      //doc will hold the updated row

      //right now return the doc in the future we could just send the old raffle number and the new raffle number
      return new Response(
        JSON.stringify({ data: "Ticket has " + doc.raffle + " raffle entries!" }),
        {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } else if (auth === "bouncer") {
      //filter collections by ticketID
      const filter = { ticketId: ticketId };

      //Set admission to false
      const modify = { admission: false };

      //pass filter and modify
      let doc = await Ticket.findOneAndUpdate(filter, modify);
      //doc will hold the old row

      //if doc.admission is false
      if (doc.admission === false) {
        //this ticket has already been scanned
        return new Response(JSON.stringify({ data: "Ticket has already entered" }), {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      } else {
        //this ticket has now been scanned
        return new Response(JSON.stringify({ data: "Good to go" }), {
          status: 200,
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } else {
      //wrong auth in header
      redirect("/about/");
    }
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return new Response(
      JSON.stringify({ data: "There was an error. Try again?" }),
      {
        status: 404,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
