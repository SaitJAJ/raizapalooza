import { Josefin_Sans } from "next/font/google";
import WhoBox from "../components/WhoBox";
import Header from "../components/Header";
import Background from "@/components/Background";
import RonRonStudio from "@/public/Vendor/RonRonStudio.JPG";
import SnapEvents from "@/public/Vendor/SnapEvents.JPG";
import Jewels from "@/public/Vendor/Jewels.JPG";
import LivePainting from "@/public/Vendor/LivePainting.JPG";
import Mycindiumglass from "@/public/Vendor/Mycindiumglass.JPG";
import MysticalMags from "@/public/Vendor/MysticalMags.JPG";
import Raizahand from "@/public/Vendor/Raizahand.JPG";
import Scuffedhouse from "@/public/Vendor/Scuffedhouse.JPG";
import Taylor from "@/public/Vendor/Taylor.JPG";
import FancyTitle from "../components/FancyTitle";

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
          <FancyTitle title={"Whozapalooza?"} />
          <p
            className={`flex text-sm lg:text-base text-left ${josefin_sans.className} pt-2 w-56 lg:w-96`}
          ></p>
        </div>
        <div className="flex flex-col pt-12 lg:pt-0 w-[90%] ">
          <div
            id="vendergrid 1"
            className="flex flex-col pt-12 items-center min-h-screen justify-around w-full"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-7 lg:grid-rows-8 lg:h-screen">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-3  lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Scuffed House"
                  src={Scuffedhouse}
                  alt="Scuffed House"
                  type={"fit"}
                  text="Hey! At ScuffedHouse we take pride in doing everything in house. We embroider, screen print, sew and much more. Our only limit is your imagination. We are a small local business that aims to help people and businesses with small orders and quick turnaround. With professional equipment you can expect professional results, we hope to work with you one day!"
                  instagram="scuffed_house_yyc"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-2 lg:col-span-3 lg:row-start-5 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="Mycindium Glass"
                  src={Mycindiumglass}
                  alt="Mycindium Glass"
                  type={"fit"}
                  text="I am a local artist. I make and sell a variety of handmade goods such as blown glass vessels, cast glass objects, glass beads, jewellery, and stained glass. I strive to create intricate, daedal works inspired by the magic of the natural world. The whimsical nature of my pieces is intended to inspire a sense of wonder and mythos. I do not shy away from more darkly fantastical themes, either, and many of my works have basis in the weird and obscure. The unique and inventive plants, creatures, and fungi I create might inhabit enchanted forests or country cottages.  The sylvan glades and rivers of the imagination are the birthplace of my art."
                  instagram="mycindium.glass"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="Tarot Card Reader"
                  src={MysticalMags}
                  alt="Tarot Card Reader"
                  type={"fit"}
                  text="Mags grew up with a background surrounded by tarot, oracle and astrology. One mystical day she was given her own deck to start her own journey and now, with over 10 years experience, she enjoys sharing her gift with others. She has many other mystical interests including astrology, numerology, dream analysis as well as psychology which will shine through in each reading. With compassion and empathy, she approaches every reading as a sacred ritual, honouring the unique energy of each client and their journey. Her mission is to empower you to embrace your true potential, navigate life's twists and turns, and manifest your deepest desires. Embark on a transformative journey of self-discovery with Mags, where the ancient wisdom of the Tarot meets modern insight, guiding you towards a future filled with clarity, purpose, and fulfilment. Your destiny awaits—let's unveil it together."
                  instagram="mizz_bliss"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-5 lg:col-span-3 lg:row-start-6 lg:row-span-3 lg:self-end ">
                <WhoBox
                  name="Jewels by Sons"
                  src={Jewels}
                  alt="Jewels by Sons"
                  type={"cover"}
                  text="Welcome to Jewels By Sons! Here you can find a variety of different unique and affordable festival and rave accessories to elevate and complete your looks. We have face jewels, hand jewels, hair jewels, faux mink lashes, sunnies, and more!"
                  instagram="jewelsbyson"
                />
              </div>
            </div>
          </div>
          <div
            id="vendergrid 2"
            className="flex flex-col items-center min-h-screen justify-around w-full"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-7 lg:grid-rows-8 lg:h-screen">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Live Painting"
                  src={LivePainting}
                  alt="Live Painting"
                  type={"fit"}
                  text="Jed is currently the resident gallery artist for Scuba Jays with his incredib le large 6 feet art work displayed all over the bar! He has been tattooing and painting for over 11 years and counting, he enjoys everything creative with art and music! Jed loves teaching and sharing his talented skills with all walks of life through his collaborations.  Come check him out live painting with his good friend Victor starting at 6pm! Stay tuned to see what beautiful art they create with a special surprise!"
                  instagram="aiswall_diorello"
                />
              </div>
              <div className="z-10 sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-2 lg:col-span-3 lg:row-start-5 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="Kamehameha Creations"
                  src={Taylor}
                  alt="Kamehameha Creations"
                  type={"cover"}
                  text="Creating and educating in the 3D industry. Our goal is to promote the heathy educational hobby that is 3D printing"
                  instagram="kamehamehacosplay"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-4 lg:col-span-3 lg:row-start-2 lg:row-span-3 lg:self-end">
                <WhoBox
                  name="Raiza Hand"
                  src={Raizahand}
                  alt="placeholder photo"
                  type={"fit"}
                  text="Hand crafted art and knick-knacks, up-cycled and curated thrifted fashion by Raiza Mativo. Ray has always had a passion for art and finding love and light in our every day. She loves a sense of community and actively strives to merge the two together - hence Raiz A Hand was born. Raiz A Hand is Ray’s little way to share a little piece of her peace with all of you. A little reminder that a friend is always near to help, to support, to encourage, to care, and to always share a snack, giggle and smile."
                  instagram="raiz.a.hand"
                />
              </div>
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-5 lg:col-span-3 lg:row-start-6 lg:row-span-3 lg:self-end ">
                <WhoBox
                  name="Snap Events"
                  src={SnapEvents}
                  alt="Snap Events"
                  type={"fit"}
                  text="Capturing priceless moments and turning events into memories, Snap Events is the life of the party!"
                  instagram="snap360_events"
                />
              </div>
            </div>
          </div>
          <div
            id="vendergrid 3"
            className="flex flex-col items-center justify-around w-full"
          >
            <div className="flex flex-col pt-4 gap-4 w-[90%] lg:grid lg:grid-cols-7 lg:grid-rows-3 ">
              <div className="sm:odd:w-2/3 sm:even:pl-[33%] lg:odd:w-full lg:even:pl-0 lg:col-start-1 lg:col-span-3 lg:row-start-1 lg:row-span-3 lg:self-start">
                <WhoBox
                  name="Ron Ron Studios"
                  src={RonRonStudio}
                  alt="Ron Ron Studios"
                  type={"fit"}
                  text="Digital media creator - Photographer and videographer Physical media creator - Custom decals, stickers, shirts, flags, and more"
                  instagram="ronronsstudio"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
