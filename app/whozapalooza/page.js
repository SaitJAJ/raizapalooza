import Image from "next/image";
import whitePlaceholder from "@/public/whitePlaceholder.png";
import BlueSwirl from "@/public/BlueSwirl.png";
import YellowShine from "@/public/YellowShine.png";
import { Antonio, Josefin_Sans } from "next/font/google";

import FancyTitle from "../components/layout/FancyTitle";
import Header from "../components/Header";

const antonio = Antonio({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-antonio",
});
const josefin_sans = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export default function Page() {
  return (
    <>
      <Header />
      <div
        id="outer"
        className="flex flex-col items-center md:pt-48 md:flex-row h-screen justify-around mt-16"
      >
        <div className="absolute text-center top-6 md:top-[20%]">
          <h1 className="font-tan-headline text-4xl md:text-6xl ">
            Whozapalooza
          </h1>
          <p className={`flex text-center ${josefin_sans.className}`}>
            This page gives a run down of every one there. Filler Text
          </p>
        </div>
        <div className="flex flex-col gap-10 w-[90%] md:grid md:grid-cols-6 md:grid-rows-2 md:w-[80%] md:h-[35rem]">
          <div className="md:col-start-1 md:col-span-2 md:row-start-1 md:self-start">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="md:col-start-2 md:col-span-2 md:row-start-2 md:self-end">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="md:col-start-4 md:col-span-2 md:row-start-1 md:self-start md:pt-12">
            <WhoBox
              name="VENDOR"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="md:col-start-5 md:col-span-2 md:row-start-2 md:self-end ">
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
      <div className="grid grid-cols-2 grid-rows-3 w-full h-60 justify-center">
        <div
          id="photo"
          className="flex col-start-1 col-span-1 row-start-1 row-span-2 "
        >
          <img
            className="object-fill"
            src="https://via.placeholder.com/160x120"
          ></img>
        </div>
        <div
          id="vendor"
          className="flex col-start-1 col-span-1 row-start-3 row-span-1 "
        >
          <h2 className={`flex text-4xl items-center ${antonio.className}`}>
            {name}
          </h2>
        </div>
        <div
          id="text"
          className="flex col-start-2 col-span-1 row-start-1 row-span-2 "
        >
          <p className={`${josefin_sans.className} text-base`}>{text}</p>
        </div>
        <div
          id="links"
          className="flex col-start-2 col-span-2 row-start-3 row-span-1"
        >
          <p className="flex flex-col justify-center gap-0 items-start">
            <a
              className={`${josefin_sans.className}`}
              href={`https://www.instagram.com/${instagram}/`}
            >
              {" "}
              Instagram➜
            </a>

            <a className={`${josefin_sans.className}`} href={website}>
              Website➜
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
