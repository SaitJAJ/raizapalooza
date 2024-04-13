import TextInput from "@/components/TextInput";
import EmailRegister from "@/components/EmailRegister";
import FancyTitle from "@/components/FancyTitle";

export default function Page(){

    return(
        <div className={'grid px-8 md:px-20'}>
            <FancyTitle title={"Raffle Entry"}/>
            <EmailRegister/>
        </div>
    )
}