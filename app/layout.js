import "./globals.css";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { getCookiePolicy } from "@/library/cookieServices";
import ParallaxBackground from "@/components/layout/ParallaxBackground";
import { BrowserRouter } from "react-router-dom";

export default async function RootLayout({ children }) {
  let policy = await getCookiePolicy();

  return (
    <html>
      <body>
        {/*<div className={'pb-2.5 overflow-x-hidden w-full'} >*/}
        <div className={"w-full min-h-[100vh]"}>{children}</div>
        <Footer />
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
  icons:{
    icon:"/favicon.ico"
  }
};
