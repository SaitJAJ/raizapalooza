import Image from "next/image";
import whitePlaceholder from "@/public/whitePlaceholder.png";
import BlueSwirl from "@/public/BlueSwirl.png";
import YellowShine from "@/public/YellowShine.png";
import { Antonio, Josefin_Sans } from "next/font/google";

import FancyTitle from "../components/layout/FancyTitle";
import Header from "../components/Header";

const antonio = Antonio({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-antonio",
});
const josefin_sans = Josefin_Sans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export default function Page() {
  return (
    <>
      <Header />
      <div
        id="outer"
        className="flex flex-col items-center md:pt-16 md:flex-row h-screen justify-around mt-16"
      >
        <div className="absolute border-2 border-white text-center top-6 md:top-[20%]">
          <h1 className="font-tan-headline text-4xl md:text-6xl ">
            Whoozapalooza
          </h1>
          <p className={`flex text-center ${josefin_sans.className}`}>
            This page gives a run down of every one there. Filler Text
          </p>
        </div>
        <div className="flex flex-col justify-center items-center md:pt-24 md:pl-48 md:gap-16 md:grid md:grid-cols-2 md:grid-rows-2 mb-16 border-2 border-white">
          <div className="md:col-start-1 md:row-start-1 md:pl-16">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="md:col-start-2 md:row-start-2">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:pr-72 md:gap-16 md:grid md:grid-cols-2 md:grid-rows-2 mt-16 border-2 border-white">
          <div className="md:col-start-1 md:row-start-1 md:pl-16">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="md:col-start-2 md:row-start-2">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function WhoBox({ src, name, alt, text, website, instagram }) {
  return (
    <>
      <div className="flex flex-row w-80 h-56">
        <div className="flex flex-col justify-start items-start grow basis-1/2 overflow-hidden ">
          <Image width={350} height={150} src={src} alt={alt} />
          <h2 className={`flex ${antonio.className} `}>{name}</h2>
        </div>
        <div
          className={`flex flex-col gap-1 text-base grow basis-1/2 bg-white `}
        >
          <p className={`${josefin_sans.className}`}>{text}</p>
          <p>
            <a
              className={`${josefin_sans.className}`}
              href={`https://www.instagram.com/${instagram}/`}
            >
              {" "}
              Instagram➜
            </a>
            <br />
            <a className={`${josefin_sans.className}`} href={website}>
              Website➜
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
