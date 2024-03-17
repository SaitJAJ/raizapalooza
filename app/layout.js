import "./globals.css";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import { getCookiePolicy } from "@/library/cookieServices";

export default async function RootLayout({ children }) {
  let policy = await getCookiePolicy();
  return (
    <html>
      <body>
        <div className={"min-h-[100vh] pb-2.5 overflow-x-hidden"}>
          {children}
        </div>
        <Suspense fallback={<Loading loading={true} />}>
          <CookieConsent cookies={policy} />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
export const metadata = {
  title: {
    template: "%s | WRAP  ",
    default: "WRAP | Waste Receiver Assessment Program",
  },
  description:
    "The Waste Receiver Facility Assessment Program, Managed by Wotherspoon Environmental Inc.",
};
