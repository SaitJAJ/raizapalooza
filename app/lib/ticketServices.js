'use server'
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";

function cleanTicket(ticket){
    console.log(ticket)
    let cleanTicket = {
        id:ticket._id.toHexString(),
        ticketId:ticket.ticketId,
        name:ticket.name,
        email:ticket.email,
        phoneNumber:ticket.phoneNumber,
        birthday:ticket.birthday,
        tier:ticket.tier,
        raffle:ticket.raffle,
    }
    console.log(cleanTicket)
    return(cleanTicket)
}
export async function getAllTickets(){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        let allTickets = await Ticket.find({})
        return allTickets.map(ticket=>{return cleanTicket(ticket)})
    }catch(error){
        console.error(error)
        return []
    }
}
export async function getTicketById(ticketId){
    try{
        // console.log(formData)
        await mongoose.connect(process.env.MONGODB_URI)
        const foundTicket = await Ticket.findOne({ticketId:ticketId})
        return cleanTicket(foundTicket)
    }catch(error){
        console.error(error)
    }
}
export async function addTicket(formData){
    try{
        // console.log(formData)
        await mongoose.connect(process.env.MONGODB_URI)
        let ticket = {
            ticketId:crypto.randomUUID(),
            name:formData.get('name'),
            email:formData.get('email'),
            phone:formData.get('phone'),
            birthday:formData.get('birthday'),
            tier:formData.get('tier'),
            raffle:formData.get('tier')==='earlyBird'?1:0,
        }
        const newTicket = await Ticket.create(ticket)
        console.log(newTicket)

    }catch(error){
        console.error(error)
    }
}