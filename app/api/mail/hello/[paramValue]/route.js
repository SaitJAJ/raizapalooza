import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Ticket from "@/models/Ticket";

export async function GET(request, { params }) {
  try {
    const ticket = new Ticket({
      ticketId: request.headers.get('ticketId'),
      name: request.headers.get('name'),
      email: "test@josh.com",
      phone: "780-190-2985",
      tier: "VIP",
      raffle: 2,
      admission: true,
    });
    await ticket.save();
    console.log(`Ticket pushed to DB: ${ticket}`);
  } catch (e) {
    console.error(`Error while trying to push ticket to DB ${e}`);
  }


  return new Response(200);
}
