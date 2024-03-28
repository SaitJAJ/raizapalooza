import { Josefin_Sans } from "next/font/google";
import WhoBox from "../components/WhoBox";
import Header from "../components/Header";
import whitePlaceholder from "@/public/whitePlaceholder.png";
import Background from "@/components/Background";

const josefin_sans = Josefin_Sans({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-josefin-sans",
});

export default function Page() {
  return (
    <Background>
      <div className="flex flex-col justify-center items-center">
        <Header />
        <div
          id="title"
          className="flex flex-col justify-center items-center top-6 lg:top-52"
        >
          <h1 className="font-tan-headline text-4xl lg:text-6xl pt-12 lg:pt-2">
            Whozapalooza?
          </h1>
          <p
            className={`flex text-sm lg:text-base text-left ${josefin_sans.className} pt-2 w-56 lg:w-96`}
          >
            This page gives a run down of every one there. Filler Text
          </p>
        </div>
        <div className="flex flex-col pt-12 lg:pt-0">
          <div
            id="vendergrid 1"
            className="flex flex-col pt-12 items-center min-h-screen justify-around"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-6 lg:grid-rows-8 lg:h-screen">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="VENDOR 1"
                  src={whitePlaceholder}
                  alt="placeholder photo"
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-2 lg:col-span-2 lg:row-start-5 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="VENDOR 2"
                  src={whitePlaceholder}
                  alt="placeholder photo"
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-4 lg:col-span-2 lg:row-start-2 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="VENDOR 3"
                  src={whitePlaceholder}
                  alt="placeholder photo"
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-5 lg:col-span-2 lg:row-start-6 lg:row-span-3 lg:self-end ">
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
            className="flex flex-col items-center min-h-screen justify-around"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-6 lg:grid-rows-8 lg:h-screen">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="VENDOR 5"
                  src={whitePlaceholder}
                  alt="placeholder photo"
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-2 lg:col-span-2 lg:row-start-5 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="VENDOR 6"
                  src={whitePlaceholder}
                  alt="placeholder photo"
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-4 lg:col-span-2 lg:row-start-2 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="VENDOR 7"
                  src={whitePlaceholder}
                  alt="placeholder photo"
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-5 lg:col-span-2 lg:row-start-6 lg:row-span-3 lg:self-end ">
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
      </div>
    </Background>
  );
}
