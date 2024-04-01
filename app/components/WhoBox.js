import { Antonio, Josefin_Sans } from "next/font/google";
import Image from "next/image";

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

export default function WhoBox({ src, name, alt, type, text, instagram }) {
  return (
    <>
      <div className="grid bg-background bg-opacity-70 grid-cols-2 grid-rows-3 w-full h-60 justify-center">
        <div
          id="photo"
          className="border-2 relative flex col-start-1 col-span-1 row-start-1 row-span-2 "
        >
          <Image
            className={type == "cover" ? "object-cover" : "object-fill"}
            fill={true}
            src={src}
            alt={alt}
          />
        </div>
        <div
          id="vendor"
          className="flex col-start-1 col-span-1 row-start-3 row-span-1 "
        >
          <h2 className={`flex text-4xl items-start  ${antonio.className}`}>
            {name}
          </h2>
        </div>
        <div
          id="text"
          className="flex flex-col justify-between col-start-2 col-span-1 row-start-1 row-span-3 "
        >
          <p
            className={`p-2 ${josefin_sans.className} overflow-y-auto  text-base max-[350px]:text-sm lg:text-sm`}
          >
            {text}
          </p>

          <a
            className={`${josefin_sans.className}`}
            href={`https://www.instagram.com/${instagram}/`}
          >
            {" "}
            Instagram➜
          </a>
        </div>
      </div>
    </>
  );
}
