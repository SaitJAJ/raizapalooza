import FormSequence from "@/components/layout/FormSequence";

export default function Page(){
    let tier=''
    if(Date.now() > new Date("April 10, 2024 23:59:59")){
        tier = 'door'
    }else{
        tier = 'earlybird'
    }
    return(
        // <div className={'h-[100vh]'}>
            <FormSequence code={tier}/>
        // </div>
     )
}