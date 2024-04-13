import "./globals.css";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { getCookiePolicy } from "@/library/cookieServices";

import localFont from "next/font/local";

const tanHeadline = localFont({
  src: "../public/fonts/TAN - HEADLINE.ttf",
  variable: "--font-tan-headline",
  display: "swap",
});

export default async function RootLayout({ children }) {
  let policy = await getCookiePolicy();

  return (
    //same with this
    <html className={`${tanHeadline.variable}`}>
      <body>
      {/*<BgWrapper/>*/}
      {/*<div className={"fixed h-[200vh] w-full -z-[10] opacity-20 bg-[url('/backgrounds/Background1.png')] -translate-y-2/3 bg-cover bg-repeat animate-pulse "}/>*/}
      {/*<div className={"fixed h-[100vh] w-full -z-[10] opacity-20 bg-[url('/backgrounds/Background2.png')] -translate-y-1/3  bg-cover bg-repeat animate-pulse delay-700"}/>*/}
      {/*<div className={"fixed h-[200vh] w-full -z-[10] bg-[url('/backgrounds/Background3.png')] opacity-20 bg-cover bg-repeat animate-pulse delay-700"}/>*/}
        {/*<div className={'pb-2.5 overflow-x-hidden w-full'} >*/}
        <div className={"w-full min-h-[100vh]"}>
            {children}
        </div>
        {/*</div>*/}
        <Suspense fallback={<Loading loading={true} />}>
          <CookieConsent cookies={policy} />
        </Suspense>

        {/*</ParallaxBackground>*/}
      </body>
    </html>
  );
}
export const metadata = {
  title: {
    template: "%s | Raizapalooza  ",
    default: "Raizapalooza",
  },
  description:
    "Get your tickets now for the next Raizapalooza, relive the memories and celebrate Raiza! ",
  icons: {
    icon: "/icons/icon256.png",
  },
};
