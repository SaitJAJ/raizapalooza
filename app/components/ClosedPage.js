import BgWrapper from "@/components/BgWrapper";
import Hyperlink from "@/components/Hyperlink";

export default function ClosedPage(){

    return(
        <>
            <div className={'m-4  md:m-40 text-center h-[60vh] flex flex-wrap justify-around'}>
                <h2 className={'font-bold text-lg w-full md:text-4xl'}>Thanks to everyone for an amazing <span className={'font-tan-headline md:text-4xl'}>Raizapalooza</span> 2024!!!</h2>
                <Hyperlink href={'/'}>Take me back Home</Hyperlink>
                <p className={' w-full'}>Check back next year for even more fun & action!</p>
            </div>

        </>
        )
}