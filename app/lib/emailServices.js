'use server'
import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'
// import {Resend} from 'resend'
import {genTicket, getOrderTickets} from "@/app/lib/ticketServices";
import TicketEmail from "@/emailTemplates/TicketEmail";
// const resend = new Resend(process.env.RESEND_API_KEY);

const transport = nodemailer.createTransport(nodemailerSendgrid({apiKey:process.env.SENDGRID_API_KEY}))

// export async function testResend(){
//     try{
//
//         console.log('here')
//         let test = await resend.emails.send({
//             from: 'onboarding@resend.dev',
//             to: 'raizapalooza@gmail.com',
//             subject: 'Hello World',
//             html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
//         });
//         console.log(test)
//         return(test)
//
//     }catch(error){
//         console.error(error)
//     }
// }

export async function createAttachments(tickets){
    // console.log(tickets)
    return Object.values(tickets).map((ticket,index)=>{
        return{
            filename:`Ticket ${index+1} of ${tickets.length}.png`,
            content:ticket.ticketBlob.split('base64,')[1],
            encoding:'base64',
            cid:ticket.ticketId
        }
    })
}
// export async function testNodemailer(){
//     try{
//         let arr = [{alt:'text',src:'cid:ticketId'},{alt:'text',src:'cid:thisisauniquestring'}]
//         let embedImages = ''
//         arr.map(i=>{
//         embedImages += `<img alt="${i.alt}" src="${i.src}" width="60" height="90" />`
//         })
//         // console.log(embedImages)
//         let test = await transport.sendMail({
//             from: 'mail@raizapalooza.com',
//             to: 'jman22shl@gmail.com',
//             subject: 'Hello World',
//             html: '<div>' +
//                 '<p>embedded:</p>' +
//                 embedImages
//                 +
//                 '</div>',
//             attachments:[
//                 {
//                     filename:'doorTicket.png',
//                     path:'public/generatedPNGs/doorTicket.png',
//                     cid:'thisisauniquestring'
//                 },
//                 {
//                     filename:'doorTicket.png',
//                     path:'public/generatedPNGs/doorTicket.png',
//                     cid:'ticketId'
//                 }
//             ]
//         });
//         console.log(test)
//         return("test")
//
//     }catch(error){
//         console.error(error)
//     }
// }
async function generateTickets(tickets){
    try{
        let background = ''
        switch(tickets[0].tier){
            case('earlybird'):
                background = 'public/generatedPNGs/earlybirdTicket.png';
                break;
            case('door'):
                background = 'public/generatedPNGs/doorTicket.png';
                break;
            default:
                background = 'public/generatedPNGs/doorTicket.png';
        }
        let generatedTickets = []
        for await(let ticket of tickets){
            let curTick = await genTicket({ticket,background})
            generatedTickets.push(curTick)

        }
        // return []
        return generatedTickets
    }catch(error){
        console.error(error)
    }
}
export async function sendTicketEmail(email,orderId){
    try{
        let tickets = await getOrderTickets(orderId)
        let gennedTickets = await generateTickets(tickets)
        let attachments = await createAttachments(gennedTickets)
        let embedImages = ''
        gennedTickets.map(i=>{
            embedImages += `<img alt="${'Ticket ID: '+i.ticketId}" src="${'cid:'+i.ticketId}" width="120" height="180" />`
        })
        let test = await transport.sendMail({
            from: 'tickets@raizapalooza.com',
            to: email,
            subject: 'Ticket Test',
            html: '<div>' +
                '<p>embedded:</p>' +
                embedImages
                +
                '</div>',
            attachments:attachments,
        });
    }catch(error){
        console.error(error)
    }
}