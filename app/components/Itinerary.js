'use server'
import FancyTitle from "@/components/FancyTitle";
import BgWrapper from "@/components/BgWrapper";

const HOUR = (60*60*10000)
const randomPositions={
    0:'m-auto',
    1:'ml-[5vw]',
    2:'ml-[10vw]',
    3:'ml-[15vw]',
    4:'ml-[20vw]',
    5:'ml-[25vw]',
    6:'ml-[30vw]',
    7:'ml-[35vw]',
    8:'ml-[40vw]',
    9:'ml-[45vw]',
}
const OPENTIME = Date.parse('13 Apr 2024 16:00:00')

const itinerary=[
    {
        title:'All Day',
        events:[
            "KANDI STATION",
            "GLITTER STATION",
            "TRADING POST",
            "RAIZAPALOOZA STATION",
            "NAMETAG STATION",
            "PHOTO BOOTH"
        ],
        time:OPENTIME,
    },
    {
        title:'4 PM',
        events:[
            "DOORS OPEN",
            "VENDOR MARKET OPEN",
            "LIVE MUSIC STARTS",
            "PHOTO BOOTH OPENS",
            "KITCHEN OPENS"
        ],
        time:OPENTIME,
    },
    {
        title:'6 PM',
        events:[
            "LIVE PAINTING STARTS",
            "LIVE MUSIC ENDS",
        ],
        time:OPENTIME+(2*HOUR),
    },
    {
        title:'10 PM',
        events:[
            "LIVE PAINTING ENDS",
        ],
        time:OPENTIME+(6*HOUR),
    },
    {
        title:'11 PM',
        events:[
            "BIRTHDAY HOUR",
            "HAPPY BIRTHDAY SONG",
            "PERFORMANCE BY PHREKWENCY",
            "ARIES BDAY PIÑATA",
            "VENDOR MARKET CLOSES",
        ],
        time:OPENTIME+(7*HOUR),
    },
    {
        title:'MID NIGHT',
        events:[
            "KITCHEN CLOSED",
        ],
        time:OPENTIME+(8*HOUR),
    },
    {
        title:'1:30 AM',
        events:[
            "LAST CALL FOR ALCOHOL",
        ],
        time:OPENTIME+(9.5*HOUR),
    },
    {
        title:'2:00 AM',
        events:[
            "DOORS CLOSED",
            "SEE YOU NEXT YEAR!",
        ],
        time:OPENTIME+(10*HOUR),
    },
]

export default async function Itinerary(){


    return(
        <>
            {Object.values('12345678'.split('').sort(function(){return 0.5-Math.random()})).map((value,index) => { // Doing the function inline to prevent render mismatch
                return(
                    <ItineraryItem key={value} position={value} index={index}/>
                )
            })}
        </>

    )
}

const ItineraryItem =({position,index})=>{
    return(
        <div className={`flex justify-between m-8 h-fit ${randomPositions[position]} w-[35vw] grow`}>
            <h3 className={'text-4xl h-fit font-bold text-element-2 mr-3  bg-radial-shadow'}>
                {itinerary[index].title}
            </h3>
            <ul className={'grow text-4xl bg-radial-shadow'}>
                {Object.values(itinerary[index].events).map((event,index)=>{
                    return(
                        <li key={index} className={''}>{event}</li>
                    )
                })}
            </ul>
        </div>

    )
}