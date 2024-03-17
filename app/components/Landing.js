"use client";
import Image from "next/image";
import BlueSwirl from "../../public/BlueSwirl.png";

import YellowSwirl from "../../public/YellowSwirl.png";

import GreenSwirl from "../../public/GreenSwirl.png";

import YellowShine from "../../public/YellowShine.png";
import GreenDuotone from "../../public/GreenDuotone.png";
import GreenDuotone2 from "../../public/GreenDuotone2.png";
import BlueDuotone from "../../public/BlueDuotone.png";
import BlueDuotone2 from "../../public/BlueDuotone2.png";
import YellowDuotone2 from "../../public/YellowDuotone2.png";
import YellowDuotone3 from "../../public/YellowDuotone3.png";

export default function Landing() {
  return (
    <div className="flex flex-col w-full">
      <div
        id={"top box"}
        className="relative flex w-full h-screen justify-center items-center overflow-x-clip"
      >
        <Image
          className="absolute mt-10 ml-14 -z-10"
          src={BlueSwirl}
          width={700}
          height={700}
         alt={'Blue Swirl'}/>
        <h1 className="font-tan-headline text-8xl "> Raizapalooza</h1>
        <Image
          className="absolute mb-[10rem] mr-[29rem] rotate-12"
          src={YellowShine}
          width={50}
          height={50}
          alt={'Yellow Shine'}
        />
        <Image
          className="absolute mb-[9rem] mr-[22rem] rotate-12"
          src={YellowShine}
          width={40}
          height={40}
          alt={'Yellow Shine'}

        />
        <Image
          className="absolute mb-[12rem] mr-[25rem] rotate-12 transition-all"
          src={YellowShine}
          width={30}
          height={30}
          alt={'Yellow Shine'}

        />
        <Image
          className="hover:animate-wiggle absolute mb-[36rem] mr-[36rem] -rotate-3"
          src={BlueDuotone}
          width={300}
          height={300}
          alt={'Blue DuoTone'}

        />
        <Image
          className="hover:animate-wiggle absolute mt-[22rem] mr-[45rem] -rotate-3"
          src={GreenDuotone}
          width={150}
          height={150}
          alt={'Blue DuoTone'}

        />
        <Image
          className="hover:rotate-90 transition-all duration-700 absolute mt-[34rem] mr-[74rem] rotate-12"
          src={YellowDuotone2}
          width={100}
          height={100}
          alt={'Yellow DuoTone'}

        />
        <Image
          className="hover:rotate-90 transition-all duration-700 absolute mb-[32rem] ml-[24rem] rotate-12"
          src={GreenDuotone2}
          width={150}
          height={150}
          alt={'Green DuoTone'}

        />
        <Image
          className="hover:rotate-90 transition-all duration-700 absolute mt-[22rem] ml-[54rem] rotate-12"
          src={BlueDuotone2}
          width={100}
          height={100}
          alt={'Blue DuoTone'}
        />
        <Image
          className="hover:animate-wiggle absolute mb-[20rem] ml-[72rem] -rotate-3"
          src={YellowDuotone3}
          width={300}
          height={300}
          alt={'Blue DuoTone'}

        />
        <Image
          className="absolute mt-[48rem] ml-[41rem] rotate-[45deg]"
          src={YellowSwirl}
          width={500}
          height={500}
          alt={'Yellow Swirl'}

        />
        <Image
          className="absolute mb-[24rem] mr-[80rem] rotate-90"
          src={GreenSwirl}
          width={500}
          height={500}
          alt={'Green Swirl'}

        />
      </div>
      <div className="w-full h-screen bg-[url('../public/LandingBackground.png')] bg-contain"></div>
      <div className="w-full h-screen bg-[url('../public/LandingBackground.png')] bg-contain"></div>
      <div className="w-full h-screen bg-[url('../public/LandingBackground.png')] bg-contain"></div>
    </div>
  );
}
