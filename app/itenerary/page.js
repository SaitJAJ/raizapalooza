import Scrolling from "@/components/Scrolling";
import Header from "@/components/Header";
import Itinerary from "@/components/Itinerary";
import FancyTitle from "@/components/FancyTitle";

export default function Page(){
    return(
        <div className={'bg-background-one bg-cover w-full -z-10'}>
            <Header />
            <FancyTitle title={'Itinerary'}/>
            <Scrolling>
                <Itinerary/>
            </Scrolling>
        </div>
    )
}