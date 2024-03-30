// import { isRedirectError } from "next/dist/client/components/redirect";
// import { redirect } from "next/navigation";
// import Ticket from "@/models/Ticket";
//
// export async function GET(request) {
//   try {
//     const useHeader = headers(request);
//     const ticketId = useHeader.get("ticketId");
//     const auth = useHeader.get("auth");
//     if (auth === "bouncer") {
//       //filter collections by ticketID
//       const filter = { ticketId: ticketId };
//       //increment raffle by 1
//       const modify = { admission: false };
//       //pass filter and modify with {new:true}
//       let doc = await Ticket.findOneAndUpdate(filter, modify);
//       //doc will hold the old row
//       //if doc.admission is false
//       if (doc.admission === false) {
//         //this ticket has already been scanned
//         return Response.json("Do not allow");
//       } else {
//         console.log("old\n", doc);
//         //this ticket has now been scanned
//         return Response.json("allow");
//       }
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
