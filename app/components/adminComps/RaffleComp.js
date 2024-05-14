'use client'
import {Input} from "postcss";
import Button from "@/components/Button";
import Spinwheel from "@/components/layout/Spinwheel";
import {useState} from "react";

export default function RaffleComp({tickets}){
    const ticketList = ()=>{
        let list = []
        for(let ticket of tickets){
            let i = 0
            while(i < ticket.raffle){
                i++
                list.push({email:ticket.email,name:ticket.name})
            }
        }
        // console.log(list)
        return list;
    }
    const [winnerName,setWinnerName] = useState()
    const handleClick=()=>{
        let tickList = ticketList()
        setWinnerName(tickList[Math.floor(Math.random()*tickList.length)])
    }
    return(
        <div className={'border-2 m-auto'}>
            <Button onClick={handleClick} value={"Pull Raffle Name"}/>
            {
                winnerName !== undefined?
                    <div className={'grid w-full px-40'}>
                        <div className={'flex justify-between'}><p>Name</p><p>{winnerName.name||'Name not Given!'}</p></div>
                        <div className={'flex justify-between '}><p>Email</p><p>{winnerName.email}</p></div>
                    </div>
                    :null
            }
        </div>
    )
}