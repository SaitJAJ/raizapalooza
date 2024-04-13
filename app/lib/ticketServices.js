'use server'
import mongoose from "mongoose";
import Ticket from "@/models/Ticket";
import {isRedirectError} from "next/dist/client/components/redirect";
import {redirect} from "next/navigation";
import {createCanvas, loadImage} from "canvas";
import QRCode from "qrcode";
import {sendTicketEmail} from "@/app/lib/emailServices";

export async function returnRaffleTicket(formData){
    try{
        const email = formData.get("email");
        await mongoose.connect(process.env.MONGODB_URI)
        let tickets = await Ticket.find({email:email})
        let count = 0
        if(tickets.length > 0){
            for(let ticket of tickets){
                count += ticket.raffle || 0
            }
            redirect(`/ticket/${tickets[0].ticketId}?count=${count}&email=${email}`)
        }else{
            const ticketId = crypto.randomUUID()
            await Ticket.create({
                ticketId:ticketId,
                email:email,
                tier:"raffle"
            })
            redirect(`/ticket/${ticketId}?count=${count}&email=${email}`)
        }
        // console.log(accountExists)
        return true

    }catch(err){
        if(isRedirectError(err)){
            throw err
        }else{
            return false
        }
    }
}
function cleanTicket(ticket){
    let cleanTicket = {
        id:ticket._id.toHexString(),
        ticketId:ticket.ticketId,
        orderId:ticket.orderId,
        paymentId:ticket.paymentId,
        paymentDate:ticket.paymentDate,
        name:ticket.name,
        email:ticket.email,
        phone:ticket.phone,
        birthday:ticket.birthday,
        tier:ticket.tier,
        raffle:ticket.raffle,
        receiptUrl: ticket.receiptUrl,
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
export async function getTicketsByEmail(email){
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        const foundTickets = await Ticket.find({email:email})
        return foundTickets.map(ticket=>{return cleanTicket(ticket)})
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
            receiptUrl:formData.get('receiptUrl'),
            paymentType:formData.get('paymentType'),
        }
        const newTicket = await Ticket.create(ticket)
        return newTicket.ticketId
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
        await sendTicketEmail(formData.get('email'), orderId)
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
        await mongoose.connect(process.env.MONGODB_URI)
        let ticket = await Ticket.findOneAndUpdate({ticketId:formData.get('ticketId')},
            {
                name:formData.get('name'),
                email:formData.get('email'),
                birthday:null,
                phone:null,
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
export async function genTicket({ticket,background}) {
    try{
        if(!background){
            return (ticket)
        }
        const canvas = createCanvas(801, 1139);
        const context = await canvas.getContext("2d");
        let image = await loadImage(background)
        context.drawImage(image, 0, 0, 801, 1139)
        const qrCanvas = createCanvas(445,410)
        await QRCode.toCanvas(qrCanvas,process.env.NEXT_PUBLIC_QR_CODE_ENDPOINT+ticket.ticketId,{margin:1,width:445,color:{light:'#fffdcf',dark:'#121212'}})
        context.drawImage(qrCanvas, 148, 586, 505, 505);
        return ({...ticket, ticketBlob: canvas.toDataURL()})
    }catch(error){
        console.error(error)
        return(ticket)
    }
}
export default async function getTicketBackground(tier){
    // console.log(tier)
    switch(tier){
        case('earlybird'):
            return 'public/qrTickets/earlybird.png';
        case('door'):
            return 'public/qrTickets/door.png';
        case('staff'):
            return 'public/qrTickets/staff.png';
        case('vip'):
            return 'public/qrTickets/vip.png';
        case('crew'):
            return 'public/qrTickets/crew.png';
        case('fam'):
            return 'public/qrTickets/fam.png';
        default:
            return 'public/qrTickets/door.png';
    }
}