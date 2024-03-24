import FormSequence from "@/components/layout/FormSequence";

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

    return(
        // <div className={'h-[100vh]'}>
            <FormSequence code={code}/>
        // </div>
     )
}