'use server'
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";
import {isRedirectError} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";

function cleanTicket(ticket){
    let cleanTicket = {
        id:ticket._id.toHexString(),
        ticketId:ticket.ticketId,
        orderId:ticket.orderId,
        paymentDate:ticket.birthday,
        name:ticket.name,
        email:ticket.email,
        phoneNumber:ticket.phoneNumber,
        birthday:ticket.birthday,
        tier:ticket.tier,
        raffle:ticket.raffle,
    }
    // console.log(cleanTicket)
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
            paymentId:formData.get('paymentId'),
            orderId:formData.get('orderId'),
            paymentDate:formData.get('paymentDate'),
            name:formData.get('name'),
            email:formData.get('email'),
            phone:formData.get('phone'),
            birthday:formData.get('birthday'),
            tier:formData.get('tier'),
            raffle:formData.get('tier')==='earlybird'?1:0,
        }
        const newTicket = await Ticket.create(ticket)
    }catch(error){
        console.error(error)
    }
}
export async function getOrderTickets (orderId) {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        let tickets = await Ticket.find({orderId:orderId})
        let allTickets = tickets.map(ticket=>{
            return cleanTicket(ticket);
        })
        return allTickets

    } catch (error) {
        if (isRedirectError(error)) {
            throw error
        }
    }
}
export async function genSpecialTickets (formData){
    try{
        const orderId=crypto.randomUUID()
        formData.append('orderId',orderId)
        formData.append('paymentDate',Date.now())
        let addTickets = []
        for(let i = 0; i < parseInt(formData.get('quant')); i++){
            addTickets.push(addTicket(formData));
        }
        await Promise.all(addTickets)
        redirect(`/tickets/manage/${orderId}`,'push')
    }catch(error){
        if(isRedirectError(error)){
            throw error
        }
        console.error(error)
    }
}
export async function updateTicketInfo(formData){
    try{
        let ticket = await Ticket.findOneAndUpdate({ticketId:formData.get('ticketId')},
            {
                name:formData.get('name'),
                email:formData.get('email'),
            },
            {returnDocument:'after'}
        )
        return cleanTicket(ticket);
    }catch(error){
        if(isRedirectError(error)){
            throw error
        }
        console.error(error)
    }
}