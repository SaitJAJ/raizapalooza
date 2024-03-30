'use server'
import BgWrapper from "@/components/BgWrapper";
import FancyTitle from "@/components/FancyTitle";
import RegisterForm from "@/components/RegisterForm";

export default async function Page(){
    return(
        <>
            <BgWrapper/>
            <div className={'flex flex-col justify-around'}>
                <FancyTitle title={'Login'}/>
                <RegisterForm/>
            </div>
        </>
        )
}