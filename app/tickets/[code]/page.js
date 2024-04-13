import FormSequence from "@/components/layout/FormSequence";
import QuickForm from "@/components/SpecialForm";
import SpecialForm from "@/components/SpecialForm";

function parseCode(code){
    switch (code){
        case("FAMPALOOZA2024PASS"):
            return "fam"
        case("STAFFPALOOZA2024PASS"):
            return "staff"
        case("CREWPALOOZA2024PASS"):
            return "crew"
        case("VIPPALOOZA2024PASS"):
            return "vip"
        case("LATEBIRDPROMISEDADMISSION398123knb123PLEASEANDTHANKYOU"):
            return "earlybird"
        default:
            if(Date.now() > new Date("April 10, 2024 23:59:59")){
                return "door"
            }else{
                return "earlybird"
            }
    }
}
export default function Page({params}){
    let code  = parseCode(params.code)
    if(['door','earlybird'].includes(code)){
        return(
            // <div className={'h-[100vh]'}>
            <FormSequence code={code}/>
            // </div>
        )
    }else{
        return(
            // <div className={'h-[100vh]'}>
            <SpecialForm tier={code}/>
            // </div>
        )
    }

}