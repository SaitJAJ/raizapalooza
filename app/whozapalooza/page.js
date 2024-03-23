import Image from "next/image";
import whitePlaceholder from "@/public/whitePlaceholder.png";
import { Antonio, Josefin_Sans } from "next/font/google";

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
    <div className="flex flex-col items-center md:flex-row h-screen justify-around mt-16">
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-2 mb-16 border-2 border-white">
        <div className="md:col-start-1 md:row-start-1">
          <WhoBox
            name="VENDER"
            src={whitePlaceholder}
            alt="placeholder photo"
            text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
            website="https://hexdle-nine.vercel.app/"
            instagram="instagram"
          />
        </div>
        <div className="md:col-start-2 md:row-start-2">
          <WhoBox
            name="VENDER"
            src={whitePlaceholder}
            alt="placeholder photo"
            text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
            website="https://hexdle-nine.vercel.app/"
            instagram="instagram"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 md:grid-rows-2 mt-16 border-2 border-white">
        <div className="md:col-start-1 md:row-start-1">
          <WhoBox
            name="VENDER"
            src={whitePlaceholder}
            alt="placeholder photo"
            text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
            website="https://hexdle-nine.vercel.app/"
            instagram="instagram"
          />
        </div>
        <div className="md:col-start-2 md:row-start-2">
          <WhoBox
            name="VENDER"
            src={whitePlaceholder}
            alt="placeholder photo"
            text="Lorem ipsum dolor sit sed do asdasd ascojn temporse sadasd deiusmod temporsed do eiusmod temporsed do eiusmod tempor "
            website="https://hexdle-nine.vercel.app/"
            instagram="instagram"
          />
        </div>
      </div>
    </div>
  );
}

function WhoBox({ src, name, alt, text, website, instagram }) {
  return (
    <>
      <div className="flex flex-row w-80 h-56">
        <div className="flex flex-col justify-start items-start grow basis-1/2 overflow-hidden ">
          <Image width={150} height={150} src={src} alt={alt} />
          <h2 className={`flex ${antonio.className}`}>{name}</h2>
        </div>
        <div
          className={`flex flex-col gap-1 text-base ${josefin_sans.className} grow basis-1/2 bg-white `}
        >
          <p>{text}</p>
          <p>
            <a href={`https://www.instagram.com/${instagram}/`}> Instagram➜</a>
            <br />
            <a href={website}>Website➜</a>
          </p>
        </div>
      </div>
    </>
  );
}
