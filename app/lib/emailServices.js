'use server'
import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'
// import {Resend} from 'resend'
import getTicketBackground, {genTicket, getOrderTickets} from "@/app/lib/ticketServices";
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
        let background = await getTicketBackground(tickets[0].tier)
        let generatedTickets = []
        for await(let ticket of tickets){
            let curTick = await genTicket({ticket,background})
            generatedTickets.push(curTick)

        }
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
export async function generateReceiptTable(paymentData){
    return(
        `
            <table>
                <tbody>
                    <tr>
                        <td>
                            Payment Date
                        </td>
                        <td>
                            ${paymentData.paymentDate}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Payment Amount
                        </td>
                        <td>
                            $ ${(paymentData.amount/100).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Total Amount
                        </td>
                        <td>
                           $ ${(paymentData.total/100).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Payment Status:
                        </td>
                        <td>
                            ${paymentData.status}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Card Type:
                        </td>
                        <td>
                            ${paymentData.cardDetails.cardBrand} ${paymentData.cardDetails.cardType}  
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Card Last 4:
                        </td>
                        <td>
                           ${paymentData.cardDetails.last4}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Square Receipt:
                        </td>
                        <td>
                            <a href="${paymentData.receiptUrl}">${paymentData.receiptUrl}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Order ID:
                        </td>
                        <td>
                            ${paymentData.orderId}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Payment ID:
                        </td>
                        <td>
                            ${paymentData.paymentId}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Square Receipt Number:
                        </td>
                        <td>
                            ${paymentData.receiptNumber}
                        </td>
                    </tr>
                </tbody>
            </table>
        `
    )
}
export async function sendReceiptEmail(paymentData,ticketIds,tier){
    try{
        let background = await getTicketBackground(tier)
        let generatedTickets = []
        for await(let ticketId of ticketIds){
            let ticket = {ticketId:ticketId}
            let curTick = await genTicket({ticket,background})
            generatedTickets.push(curTick)
        }
        let attachments = await createAttachments(generatedTickets)
        let embedImages = '';
        generatedTickets.map(i=>{
            embedImages += `<img alt="${'Ticket ID: '+i.ticketId}" src="${'cid:'+i.ticketId}" width="120" height="180" />`
        })
        let receiptTable = await generateReceiptTable(paymentData)
        // console.log(attachments,embedImages)
        let test = await transport.sendMail({
            from: 'tickets@raizapalooza.com',
            to: paymentData.buyerEmail,
            subject: 'Ticket Test',
            html: '<div>' +
                '<p>embedded:</p>' +

                embedImages
                +
                receiptTable
                +
                '</div>',
            attachments:attachments,
        });

    }catch (err){
        console.error(err)
    }


}