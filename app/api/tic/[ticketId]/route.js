import {isRedirectError} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";

export async function GET({params}){
    try{
        console.log(params)
        redirect('/about/')
        return new Response("test",{status:200})
    }catch(error){
        if(isRedirectError(error)){
            throw error
        }
        console.error(error)
    }
}