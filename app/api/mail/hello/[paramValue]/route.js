import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Test from "@/models/Test";

export async function GET(request, { params }) {
  try {
    const cookie = cookies().get("role");
    const value = params.paramValue;
    //if user doesnt have cookie, redirect to tickets
    if (!cookie) {
      redirect("/tickets", "push");
    }
    console.log(request);
    //test cookie for bartender
    //check if user exists
    const test = await Test.exists({ ticketId: params.paramValue });
    if (test === null) {
      //if user doesnt exist (shouldnt be the case ever)
      //create the user
      console.log(params.paramValue + " is not a user");
      //if the user does exist, increment raffle
    } else {
      console.log(params.paramValue + " is a user.");
      const test2 = await Test.findById(test._id);
      test2.raffle = test2.raffle + 1;
      await test2.save();
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
