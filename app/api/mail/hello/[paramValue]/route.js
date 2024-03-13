import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function GET(request, { params }) {
  try {
    const cookie = cookies().get("role");
    const value = params.paramValue;
    if (!cookie) {
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
