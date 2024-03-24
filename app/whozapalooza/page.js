import { Josefin_Sans } from "next/font/google";
import WhoBox from "../components/WhoBox";
import Header from "../components/Header";
import whitePlaceholder from "@/public/whitePlaceholder.png";

const josefin_sans = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div
        id="title"
        className="flex flex-col justify-center items-center top-6 md:top-52"
      >
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
        id="vendergrid 1"
        className="flex flex-col items-center bg-background h-screen justify-around"
      >
        <div className="flex flex-col pt-4 gap-4 w-[90%] md:grid md:grid-cols-6 md:grid-rows-8 md:w-[80%] md:h-screen">
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
      <div
        id="vendergrid 2"
        className="flex flex-col items-center bg-background h-screen justify-around"
      >
        <div className="flex flex-col pt-4 gap-4 w-[90%] md:grid md:grid-cols-6 md:grid-rows-8 md:w-[80%] md:h-screen">
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-1 md:col-span-2 md:row-start-1 md:row-span-3 md:self-start">
            <WhoBox
              name="VENDOR 5"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-2 md:col-span-2 md:row-start-5 md:row-span-3 md:self-end">
            <WhoBox
              name="VENDOR 6"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-4 md:col-span-2 md:row-start-2 md:row-span-3 md:self-start">
            <WhoBox
              name="VENDOR 7"
              src={whitePlaceholder}
              alt="placeholder photo"
              text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
              website="https://hexdle-nine.vercel.app/"
              instagram="instagram"
            />
          </div>
          <div className="sm:odd:w-2/3 sm:even:pl-52 md:odd:w-full md:even:pl-0 md:col-start-5 md:col-span-2 md:row-start-6 md:row-span-3 md:self-end ">
            <WhoBox
              name="VENDOR 8"
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
