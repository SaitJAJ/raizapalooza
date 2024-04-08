'use client'
import Image from "next/image";
import {useEffect, useState} from "react";

export default function ItineraryImages(){
    const [mobile, setMobile] = useState(false);
    // const [height, setHeight] = useState('h-200')
    useEffect(()=>{
        window.addEventListener('resize',resizeSize,false);
        return()=>{
            window.removeEventListener('resize',resizeSize,false);
        }
    },[])
    const resizeSize=()=>{
        console.log(window.innerWidth)
        if(window.innerWidth >= 768){
            setMobile(false)
        }else{
            setMobile(true)
        }
    }

    return(
        <>
            <div className={` h-[7750px] md:h-[17000px] w-full relative`}>
                {mobile?
                    <Image
                        src={'/itinerary/itineraryMobile.jpg'}
                        alt={"itinerary"}
                        quality={'100'}
                        fill
                    />:
                    <Image
                        src={'/itinerary/itineraryDesktop.jpg'}
                        alt={"itinerary"}
                        quality={'100'}
                        fill
                    />
                }

            </div>
        </>

    )
}