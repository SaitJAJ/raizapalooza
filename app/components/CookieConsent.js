import Link from "next/link";
import CookiesButtons from "@/components/CookiesButtons";
export default async function CookieConsent({cookies}){
    if(!cookies){
        return(
            <div className={'flex flex-col justify-between w-[450px] h-fit border-2 bottom-0 fixed text-center px-6 '}>
                <h3 className={'text-2xl'}>Our Cookies Usage</h3>
                <p>
                    This website only uses essential cookies, and does not collect, track or sell your usage data.
                </p>
                <p>
                    We respect your privacy, and would like to give you the option to opt out of any non-essential cookies that we may use in the future.
                </p>
                <p>
                    Our privacy policy can be found <Link className={'text-blue-500'} href={'terms'}>Here</Link> and is always linked in our page footer.
                </p>
                <CookiesButtons/>
            </div>
        )
    }else{
        return null
    }


}