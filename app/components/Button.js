'use client'

import {useRouter} from "next/navigation";
import {useState} from "react";
import Loading from "@/components/Loading";

export default function Button(props){
    const router = useRouter()
    const [loading, setLoading] = useState(props.loading)
    const {
        type = "button",
        value="",
        label="",
        id="",
        navTo='',
        onClick=()=>{
            if(navTo){
                setLoading(true)
                router.push(navTo)
            }
        },
        disabled=false,
        className='py-2 px-8 rounded-md hover:cursor-pointer h-full hover:outline hover: ',
    } = props;

    return(
        <label >
            <Loading loading={loading}>
                {label}
                <input  className={className} type={type} value={value} disabled={disabled} id={id} onClick={onClick}/>
            </Loading>
            </label>
    )
}