import Image from "next/image";

import YellowShine from "@/public/YellowShine.png";
import BlueSwirl from "@/public/BlueSwirl.png";

export default function FancyHeader(props){
    return(
        <div className={'absolute top-[20%] md:pt-20 pt-10 bg-[url("/BlueSwirl.png")]'}>
            <h1 className="font-tan-headline text-4xl md:text-8xl">{props.title}</h1>
            <Image
                className="absolute top-0  -z-[2]"
                src={BlueSwirl}
                width={700}
                height={700}
                alt={'Blue Swirl'}/>
        </div>
    )
}