'use client'
import Hyperlink from "@/components/Hyperlink";
import {returnRaffleTicket} from "@/app/lib/ticketServices";
import Button from "@/components/Button";
import {useState} from "react";
import Loading from "@/components/Loading";

export default function RaffleInfo({count,email}){
    const [loading,setLoading] = useState(false)
    const handleClick = async ()=>{
        console.log('here')
        setLoading(true)
        let formData = new FormData()
        formData.append('email',email)
        await returnRaffleTicket(formData)
        setLoading(false)
    }
    return(
        <div className={'grid text-center'}>
            <ul>
                <li>
                    Your Email is: {email}
                </li>
                <li>
                    You have {count} raffle tickets
                </li>
            </ul>
            {/*<span>*/}
                <Loading loading={loading}>
                    <Button onClick={handleClick} value={"Refresh Counter"}></Button>
                </Loading>
            {/*</span>*/}
        </div>
    )
}