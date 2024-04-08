'use server'
import FancyTitle from "@/components/FancyTitle";
import BgWrapper from "@/components/BgWrapper";

const HOUR = (60*60*10000)
const randomPositions={
    0:'md:ml-[5vw] ',
    1:'md:ml-[10vw] lg:ml-[20vw]',
    2:'md:ml-[25vw] lg:ml-[30vw]',
    3:'md:ml-[18vw] lg:ml-[25vw]',
    4:'md:ml-[30vw] lg:ml-[35vw]',
    5:'md:ml-[5vw]  lg:ml-[15vw]',
    6:'md:ml-[23vw] lg:ml-[32vw]',
    7:'md:ml-[5vw]  lg:ml-[10vw]',
    8:'md:ml-[25vw] lg:ml-[30vw]',
    9:'md:ml-[30vw] lg:ml-[50vw]',
}
const OPENTIME = Date.parse('13 Apr 2024 16:00:00')

const itinerary=[
    {
        title:'ALL DAY',
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
        title:'4PM',
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
        title:'6PM',
        events:[
            "LIVE PAINTING STARTS",
            "LIVE MUSIC ENDS",
        ],
        time:OPENTIME+(2*HOUR),
    },
    {
        title:'10PM',
        events:[
            "LIVE PAINTING ENDS",
        ],
        time:OPENTIME+(6*HOUR),
    },
    {
        title:'11PM',
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
        title:'1:30AM',
        events:[
            "LAST CALL FOR ALCOHOL",
        ],
        time:OPENTIME+(9.5*HOUR),
    },
    {
        title:'2:00AM',
        events:[
            "DOORS CLOSED",
            "SEE YOU NEXT YEAR!",
        ],
        time:OPENTIME+(10*HOUR),
    },
]

export default async function Itinerary(){


    return(
        <div className={' ml-[25vw] md:mx-[5vw] pb-[40vh]'}>
            {Object.values('12345678'.split('')).map((value,index) => { // Doing the function inline to prevent render mismatch
                return(
                    <ItineraryItem key={value} position={value} index={index}/>
                )
            })}
        </div>

    )
}

const ItineraryItem =({position,index})=>{
    return(
        <div className={`flex justify-between my-[5vh] md:my-[20vh] font-antonio h-fit ${randomPositions[position]} grow`}>
            <h3 className={'text-4xl h-fit font-bold text-element-2 text-right mr-3 bg-radial-shadow py-2'}>
                {itinerary[index].title}
            </h3>
            <ul className={'grow md:text-4xl bg-radial-shadow text-left'}>
                {Object.values(itinerary[index].events).map((event,index)=>{
                    return(
                        <li key={index} className={'py-2'}>{event}</li>
                    )
                })}
            </ul>
        </div>

    )
}