import Image from "next/image";

import YellowShine from "@/public/YellowShine.png";
import BlueSwirl from "@/public/BlueSwirl.png";

export default function RaizapaloozaTitle(props){
    return(
        <div className={'absolute top-[15%] md:pt-20 pt-10 bg-[url("/BlueSwirl.png")] z-50'}>
            <h1 id='raiza-title' className="font-tan-headline text-4xl md:text-6xl">{props.title}</h1>
            <Image
                className="absolute top-0 -z-[1]"
                src={BlueSwirl}
                width={700}
                height={700}
                alt={'Blue Swirl'}/>
            <Image
                className={'md:top-0 top-2 w-[25px] md:w-[50px]  md:left-32 left-12 absolute z-10'}
                // className="absolute mb-[10rem] mr-[29rem] rotate-12"
                src={YellowShine}
                width={50}
                height={50}
                alt={'Yellow Shine'}
            />
            <Image
                className={'md:top-8 top-6 md:left-28 w-[20px] md:w-[40px] left-10 absolute'}
                // className="absolute mb-[9rem] mr-[22rem] rotate-12"
                src={YellowShine}
                width={40}
                height={40}
                alt={'Yellow Shine'}
            />
            <Image
                className={'md:top-10 top-6  w-[15px] md:w-[30px] md:left-40 left-16 absolute'}
                // className="absolute mb-[12rem] mr-[25rem] rotate-12 transition-all"
                src={YellowShine}
                width={30}
                height={30}
                alt={'Yellow Shine'}

            />
            </div>
    )
}