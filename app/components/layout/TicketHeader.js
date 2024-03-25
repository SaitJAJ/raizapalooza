import Image from "next/image";

import YellowShine from "@/public/YellowShine.png";
import BlueSwirl from "@/public/BlueSwirl.png";
import {useEffect, useState} from "react";

export default function TicketHeader({title,className}){
    const [titleText,setTitleText] = useState('')
    useEffect(()=>{
        let text = ''
        switch (title){
            case('earlybird'):
                text = "Early Bird";
                break;
            case('door'):
                text = "General Ticket";
                break
            case('fam'):
                text = "Family Pass";
                break;
            case('vip'):
                text = "VIP Pass";
                break;
            case('crew'):
                text = "Crew Pass";
                break;
            case('staff'):
                text = "Staff Pass";
                break;
        }
        setTitleText(text)
    },[title])
    return(
        <div className={'relative h-fit w-fit p-6  md:p-10 mx-auto'}>
            <h3 className={'font-tan-headline text-center text-4xl md:text-nowrap md:text-6xl'}>
                {titleText}
            </h3>
            <Image
                className={"absolute -z-[2]"}
                src={BlueSwirl}
                fill
                alt={'Blue Swirl'}/>
        </div>
    )
}