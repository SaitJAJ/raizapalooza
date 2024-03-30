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

export default function WhoBox({
  src,
  name,
  alt,
  type,
  text,
  website,
  instagram,
}) {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 w-full h-60 justify-center">
        <div
          id="photo"
          className="relative flex col-start-1 col-span-1 row-start-1 row-span-2 "
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
          className="flex col-start-1 col-span-2 row-start-3 row-span-1 "
        >
          <h2 className={`flex text-4xl items-start  ${antonio.className}`}>
            {name}
          </h2>
        </div>
        {/* <div
          id="text"
          className="flex col-start-2 col-span-1 row-start-1 row-span-2 "
        >
          <p
            className={`${josefin_sans.className} text-base max-[350px]:text-sm lg:text-sm`}
          >
            {text}
          </p>
        </div> */}
        {/* <div
          id="links"
          className="flex col-start-2 col-span-2 row-start-3 row-span-1"
        >
          <p className="flex flex-col justify-end gap-0 items-start ">
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
        </div> */}
      </div>
    </>
  );
}
