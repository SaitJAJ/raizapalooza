'use client'
import Loading from "@/components/Loading";
import {useState} from "react";

export default function Hyperlink({href, children}, props){
    const [navigating,setNavigating] = useState(false)
    let {onClick =()=>setNavigating(true)} = props

    return(
        <Loading loading={navigating}>
            <a href={href} onClick={onClick} className={'text-blue-500 text-ellipsis'}>
                {children}
            </a>
        </Loading>
        )
}