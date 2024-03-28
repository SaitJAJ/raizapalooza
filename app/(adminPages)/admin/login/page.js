'use server'
import BgWrapper from "@/components/BgWrapper";
import FancyTitle from "@/components/FancyTitle";
import Button from "@/components/Button";
import LoginForm from "@/components/layout/LoginForm";

export default async function Page(){
    return(
        <>
            <BgWrapper/>
            <div className={'flex flex-col justify-around'}>
                <FancyTitle title={'Login'}/>
                <LoginForm/>
            </div>
        </>
        )
}