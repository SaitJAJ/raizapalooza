'use client'
import Scrolling from "@/components/Scrolling";
import Header from "@/components/Header";
import Background from "../components/Background";
import { useState } from "react";

export default function Page(){
    return(
        <>                
            <Background>
                <Header />
                <div className={"flex w-full h-full flex-col justify-center align-middle mt-[10vh]"}>
                    <div className="flex max-lg:flex-col flex-row justify-center max-lg:p-[5rem] p-[10rem] w-[100%] max-lg:w-[90%] gap-40 max-lg:gap-8">
                        <h1 className={"text-6xl text-left font-tan-headline"}>THE PARTY:</h1>
                        <ul className='flex relative grow-1 flex-col justify-between gap-5 bg-background p-5'>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">DRINKS</li>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">PHOTO BOOTH</li>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">RAIZALAND</li>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">LIVE MUSIC 4-6PM</li>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">LIVE PAINTING 6-10PM</li>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl"><a href='/whozapalooza' className="flex underline hover:no-underline">MARKET 4-11PM</a></li>
                            <li className="text-left font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">GLITTER STATION</li>
                        </ul>
                    </div>
                </div>
                <div className={"flex w-full h-full flex-col justify-center align-middle"}>
                    <div className="dark-overlay -top-[10%] left-[20%]"></div>
                    <div className="flex max-lg:flex-col flex-row justify-center max-lg:p-[2rem] p-[10rem] w-[100%] gap-40 max-lg:gap-8 max-lg:w-[90%]">
                        <ul className='flex relative grow-1 flex-col justify-between gap-5 text-lg bg-background p-5'>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl text-[#00fd83]">ALCOHOLIC:</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$4 SHOTS</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$5 HIGH-BALLS</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$6 SPECIAL PRICE BEERS</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$8 FULL ROTATING BEER TAP</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$10 PINT AND SHOT COMBO</li>
                            <li></li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl text-[#00fd83]" >RAFFLE ENTRIES:</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$15 FOR 5 SHAFTS</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$25 FOR 5 ROTATING BEERS</li>
                            <li></li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl text-[#00fd83]">NON-ALCOHOLIC:</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$6 MOLSON NON-ALCOHOLIC BEER</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$6 - 2 MOCKTAILS: ORANGE SPRITZERS AND CLEAN OLD FASHIONS</li>
                            <li className="text-right font-bold font-josefin-sans max-lg:text-3xl max-md:text-2xl text-4xl">$3 POP - FREE REFILLS</li>
                        </ul>
                        <h1 className={"text-6xl text-right font-bold font-tan-headline max-lg:order-first"}>:DRINK MENU</h1>
                    </div>
                </div>
                <button className="w-screen max-lg:-mt-0 -mt-[10vh] p-[5vh] bg-element-1"><a className='text-element-2 font-extrabold font-josefin-sans text-4xl' href='/tickets'>GET TICKETS NOW</a></button>
            </Background>
        </>
    )
}