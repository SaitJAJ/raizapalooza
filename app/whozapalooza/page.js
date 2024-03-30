import { Josefin_Sans } from "next/font/google";
import WhoBox from "../components/WhoBox";
import Header from "../components/Header";
import whitePlaceholder from "@/public/whitePlaceholder.png";
import Background from "@/components/Background";
import Jewels from "@/public/Vendor/Jewels.JPG";
import LivePainting from "@/public/Vendor/LivePainting.JPG";
import Mycindiumglass from "@/public/Vendor/Mycindiumglass.JPG";
import MysticalMags from "@/public/Vendor/MysticalMags.JPG";
import Raizahand from "@/public/Vendor/Raizahand.JPG";
import Scuffedhouse from "@/public/Vendor/Scuffedhouse.JPG";
import Taylor from "@/public/Vendor/Taylor.JPG";

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
        <div className="flex flex-col pt-12 lg:pt-0 w-[80%]">
          <div
            id="vendergrid 1"
            className="flex flex-col pt-12 items-center min-h-screen justify-around w-full"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-6 lg:grid-rows-8 lg:h-screen">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Scuffed House"
                  src={Scuffedhouse}
                  alt="Scuffed House"
                  type={"fit"}
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-2 lg:col-span-2 lg:row-start-5 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="Mycindium Glass"
                  src={Mycindiumglass}
                  alt="Mycindium Glass"
                  type={"fit"}
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-4 lg:col-span-2 lg:row-start-2 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Lunary Art"
                  src={MysticalMags}
                  alt="Lunary Art"
                  type={"fit"}
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-5 lg:col-span-2 lg:row-start-6 lg:row-span-3 lg:self-end ">
                <WhoBox
                  name="Jewels by Sons"
                  src={Jewels}
                  alt="Jewels by Sons"
                  type={"cover"}
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
            </div>
          </div>
          <div
            id="vendergrid 2"
            className="flex flex-col items-center min-h-screen justify-around w-full"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-6 lg:grid-rows-8 lg:h-screen">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Live Painting"
                  src={LivePainting}
                  alt="Live Painting"
                  type={"fit"}
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-2 lg:col-span-2 lg:row-start-5 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="3D Printing"
                  src={Taylor}
                  alt="3D Printing"
                  type={"cover"}
                  text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
                  website="https://hexdle-nine.vercel.app/"
                  instagram="instagram"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-4 lg:col-span-2 lg:row-start-2 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Raiza Hand"
                  src={Raizahand}
                  alt="placeholder photo"
                  type={"fit"}
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
