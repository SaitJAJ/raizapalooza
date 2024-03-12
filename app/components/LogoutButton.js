'use client'
import {logout} from "@/actions/authenticationServices";
import Button from "@/inputs/Button";
import Loading from "@/components/info/Loading";
import {useState} from "react";

export default function LogoutButton(props){
    const {
        type = "button",
        value="Logout",
        label="",
        id="",
    } = props;
    const [loading,setLoading] = useState(false)
    const doLogout = ()=>{
        setLoading(true)
        logout()
    }
    return(
    <Loading loading={loading}>
        <Button type={type} value={value} id={id} onClick={doLogout}/>
    </Loading>
    )
}