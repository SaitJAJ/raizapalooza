'use client'
import FancyButton from "@/components/FancyButton";
import Loading from "@/components/Loading";
import {useState} from "react";
import {acceptCookies} from "@/library/cookieServices";

export default function CookiesButtons(){
    const [loading, setLoading]=useState(false)
    const handleCookies=async(e)=>{
        setLoading(true)
        await acceptCookies(e.target.id)
        e.preventDefault()
        setLoading(false)
    }

    return(
        <Loading loading={loading} message={"Saving your Preferences"}>
            <div className={'flex justify-between h-fit'}>
                <FancyButton onClick={handleCookies}>
                    <p id={'all'}>Accept All Cookies </p>
                </FancyButton>
                <FancyButton onClick={handleCookies} hoverColor={'hover:bg-element-1'}>
                    <p  id={'essential'}>Only Essential Cookies</p>
                </FancyButton>
            </div>
        </Loading>
    )
}