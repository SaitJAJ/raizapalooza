import Scrolling from "@/components/Scrolling";
import Header from "@/components/Header";
import Itinerary from "@/components/Itinerary";
import FancyTitle from "@/components/FancyTitle";
import Image from 'next/image'
import Footer from "@/components/Footer";
import ItineraryImages from "@/components/ItineraryImages";

export default function Page(){
    return(
        // <>
        //     <ItineraryImages/>
        // </>
        <div className={'bg-background-two bg-cover w-full -z-10'}>
            <Header />
            <FancyTitle title={'Itinerary'}/>
            <Scrolling>
                <Itinerary/>
            </Scrolling>
        </div>
    )
}