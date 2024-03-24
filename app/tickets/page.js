import FormSequence from "@/components/layout/FormSequence";
import Header from "../components/Header";

export default function Page(){
    let tier = ''
    if(Date.now() > new Date("April 10, 2024 23:59:59")){
        tier =  "door"
    }else{
        tier = "earlybird"
    }
    return(
        <>
            <FormSequence code={tier}/>
        </>

     )
}