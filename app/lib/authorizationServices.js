'use server'
import {isRedirectError} from "next/dist/client/components/redirect";
import Account from "@/models/Account";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import {redirect} from "next/navigation";
import {setJwt} from "@/serverFunctions/JWTutils";

export async function login(formData){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        let userAccount = await Account.findOne({email:formData.get('email')})
        if(await bcrypt.compare(formData.get('password'),userAccount.password)){
            await setJwt({name:userAccount.name,email:userAccount.email})
            redirect('/admin/home','replace')
        }
        return('Could not log you in')
    }catch(err){
        if(isRedirectError(err)){
            throw err
        }
        console.error(err)
        return('Server side error')
    }
}
export async function register(formData){
    try{
        await mongoose.connect(process.env.MONGODB_URI)

        if(formData.get('confPassword') === formData.get('password')){
            const saltRounds=10;
            let hash = await bcrypt.hashSync(formData.get('password'),saltRounds)
            let newUser = Account.create({
                name:formData.get('name'),
                email:formData.get('email'),
                password:hash,
            })
            redirect('/admin/login/','push')
        }
        return("Registration Failed!")
    }catch(err){
        if(isRedirectError(err)){
            throw err
        }else{

            console.error(err)
            return 'Cannot register!'

        }
    }
}