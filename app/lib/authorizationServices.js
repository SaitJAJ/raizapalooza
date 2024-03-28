'use server'
import {isRedirectError} from "next/dist/client/components/redirect";

export async function login(formData){
    try{
        console.log(formData)


        return('Login Failed')
    }catch(err){
        if(isRedirectError(err)){
            throw err
        }
        console.error(err)
        return('Login Failed')
    }
}