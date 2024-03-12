import Member from "@/model/Member";
import mongoose from "mongoose";

export default async function verifyCreds(creds){
    await mongoose.connect(process.env.MONGODB_URI)
    let auditor = await Member.findOne({email:creds.email,apiKey:creds.token, isAdmin:true})
    return(auditor)
}