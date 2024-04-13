'use client'
import TicketListItem from "@/components/TicketListItem";
import EmailTicketListItem from "@/components/EmaiTicketListItem";
import {useState} from "react";
import {sendEmailTickets} from "@/app/lib/emailServices";

export default function AllTickets({title, tickets}){
    const [expandedTickets,setExpandedTickets] = useState(tickets.map(ticket=>{
        return {
            ticket:ticket,
            ticketId:ticket.ticketId,
            loading:false
        }
    }).sort((a,b)=>{
        if(a.ticket.email > b.ticket.email){
            return 1
        }
        if(a.ticket.email < b.ticket.email){
            return -1
        }
        return 0
    }))

    function onlyUnique(value,index,array){
        console.log(value,index)
        return array.findIndex(({ticket})=>ticket.email === value)===index;
    }
    const handleClick =async ()=>{
        let unique = expandedTickets.filter(({ticket},index)=>onlyUnique(ticket.email,index,expandedTickets))
        console.log(unique)
        setExpandedTickets(expandedTickets.map(ticket=>{
            return {...ticket, loading:true}
        }))
        let doneEmails =[]
        let errorEmails = []
        for await( let ticket of unique){
            try{
                let email = await sendEmailTickets(ticket.ticket.email);
                if(email){
                    doneEmails.push(ticket.ticket.email)
                }else{
                    errorEmails.push(ticket.ticket.email)
                }
            }catch(err){
                errorEmails.push(ticket.ticket.email)
                console.log(`error with ${ticket.ticket.email}`,err)
            }
            setExpandedTickets(expandedTickets.map(ticket=>{
                if(doneEmails.includes(ticket.ticket.email)){
                    return {...ticket, loading:false}
                }
                return ticket
            }))

            console.log("Errored emails", errorEmails)
        }
    }

    return(
        <>
            <input type={"button"} onClick={handleClick} value={'Clickme'}/>
            <h3 className={'text-center text-4xl '}>
                {title} ({tickets.length})
            </h3>
            <table className={'w-full border-2'}>
                <thead>
                <tr>
                    <th className={'grow'}>Name</th>
                    <th className={'grow'}>Email</th>
                    <th className={'grow'}>Tier</th>
                    <th className={'grow'}>Sending</th>
                </tr>
                </thead>
                <tbody>
                {expandedTickets.map(ticket=>{
                    return(<EmailTicketListItem key={ticket.ticketId} ticket={ticket.ticket} loading={ticket.loading}/>)
                })}

                </tbody>
            </table>
        </>
    )
}