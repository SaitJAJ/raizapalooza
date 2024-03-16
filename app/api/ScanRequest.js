import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Ticket from "@/models/Test";

export async function GET(request, { params }) {
  console.log("getteed");
  const ticket = new Ticket({
    ticketId: request.headers.get('id'),
    name: request.headers.get('name'),
    email: "test@josh.com",
    phoneNumber: "780-190-2985",
    tier: "VIP",
    raffle: 2,
    admission: true,
  });
  await ticket.save();
  const firstTix = await Ticket.findOne({});
  console.log(firstTix);
}
