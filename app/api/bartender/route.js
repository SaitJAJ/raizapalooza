// 'use server'
// import { isRedirectError } from "next/dist/client/components/redirect";
// import { headers } from "next/headers";
// import { redirect } from "next/navigation";
// import Ticket from "@/models/Ticket";
//
// export async function GET(request) {
//   try {
//     const useHeader = headers(request);
//     const ticketId = useHeader.get("ticketId");
//     const auth = useHeader.get("auth");
//     if (auth === "bartender") {
//       //filter collections by ticketID
//       const filter = { ticketId: ticketId };
//       //increment raffle by 1
//       const modify = { $inc: { raffle: 1 } };
//       //pass filter and modify with {new:true}
//       let doc = await Ticket.findOneAndUpdate(filter, modify, { new: true });
//       //doc will hold the updated row
//       console.log(doc);
//       //right now return the doc in the future we could just send the old raffle number and the new raffle number
//       return Response.json("New raffle number: " + doc.raffle);
//     } else {
//       //wrong auth in header
//       redirect("/tickets", "push");
//     }
//   } catch (error) {
//     if (isRedirectError(error)) {
//       throw error;
//     }
//     console.log(error);
//
//     return Response.json("Something went wrong", { status: 200 });
//   }
// }
