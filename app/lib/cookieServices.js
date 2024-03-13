'use server'
import {cookies} from "next/headers";

export async function acceptCookies(level){
    try{
        cookies().set('cookiePolicy',level,{httpOnly:true,secure:true,sameSite:'lax',maxAge:60*60*24*365})
        return true
    }catch(err){
        console.log(err)
    }
}
export async function getCookiePolicy(){
    try{
        let cookie = await cookies().get('cookiePolicy')
        return !!cookie
    }catch(error){
        return false
    }
}
export async function addRoleCookie(role){
    try{
        cookies().set('role',role,{sameSite:'lax',maxAge:60*60*24*365})
        return true
    }catch(error){
        console.error(error)
        return false
    }
}