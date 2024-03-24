import {usePathname, useRouter} from "next/navigation";

export default function TicketsButton(){
    const router = useRouter()
    const pathname = usePathname();
    if(pathname.startsWith('/tickets')){
        return null
    }
    return(
        <div id={"header-div1"}>
            <div id="header-div2">
                <button
                    id="header-ticket-button"
                    type={"button"}
                    onClick={() => router.replace("/tickets/")}
                >
                    TICKETS
                </button>
            </div>
        </div>
    )
}