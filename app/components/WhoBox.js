import { Antonio, Josefin_Sans } from "next/font/google";

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

export default function WhoBox({ src, name, alt, text, website, instagram }) {
  return (
    <>
      <div className="grid grid-cols-2 grid-rows-3 w-full h-60 justify-center">
        <div
          id="photo"
          className="flex col-start-1 col-span-1 row-start-1 row-span-2 "
        >
          {/*<img*/}
          {/*  className="object-fill"*/}
          {/*  src="https://via.placeholder.com/160x120"*/}
          {/*  alt={alt}*/}
          {/*></img>*/}
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
