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
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="border-2 border-white flex flex-col justify-center items-center top-6 md:top-52">
        <h1 className="font-tan-headline text-4xl md:text-6xl pt-12 md:pt-2">
          Whozapalooza?
        </h1>
        <p
          className={`flex text-sm md:text-base text-left ${josefin_sans.className} pt-2 w-56 md:w-96`}
        >
          This page gives a run down of every one there. Filler Text
        </p>
      </div>
      <div
        id="vendergrid"
        className="flex flex-col items-center bg-background h-screen justify-around"
      >
        <div className="flex flex-col pt-4 gap-4 w-[90%] md:grid md:grid-cols-6 md:grid-rows-8 md:w-[80%] md:h-[36rem]">
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3 md:self-start">
            <WhoBox
              name="VENDOR 1"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-2 md:col-span-2 md:row-start-5 md:row-span-3 md:self-end">
            <WhoBox
              name="VENDOR 2"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-4 md:col-span-2 md:row-start-2 md:row-span-3 md:self-start">
            <WhoBox
              name="VENDOR 3"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-5 md:col-span-2 md:row-start-6 md:row-span-3 md:self-end ">
            <WhoBox
              name="VENDOR 4"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
        </div>
      </div>
    </div>
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
            alt={alt}
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
