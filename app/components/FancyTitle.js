import Image from "next/image";
import BlueSwirl from "@/public/BlueSwirl.png";

export default function FancyTitle({title}){
    return(
        <div className={'relative h-fit w-fit p-6  md:p-10 mx-auto mt-[10vh]'}>
            <h3 className={'font-tan-headline text-center text-4xl md:text-nowrap md:text-6xl'}>
                {title}
            </h3>
            <Image
                className={"absolute -z-[2]"}
                src={BlueSwirl}
                fill
                alt={'Blue Swirl'}/>
        </div>
    )
}
