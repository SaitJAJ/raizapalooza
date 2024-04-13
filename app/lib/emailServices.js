'use server'
import nodemailer from 'nodemailer'
import nodemailerSendgrid from 'nodemailer-sendgrid'
// import {Resend} from 'resend'
import getTicketBackground, {genTicket, getOrderTickets, getTicketsByEmail} from "@/app/lib/ticketServices";
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
        let generatedTickets = []
        for await(let ticket of tickets){
            let background = await getTicketBackground(ticket.tier)
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
            embedImages += `<img style="margin:auto" alt="${'Ticket ID: '+i.ticketId}" src="${'cid:'+i.ticketId}" width="360" height="540" />`
        })
        let test = await transport.sendMail({
            from: 'tickets@raizapalooza.com',
            to: email,
            subject: 'Raizapalooza Specialty Tickets',
            html: `
                <div style="text-align:center;" >
                    <h1> Hello ${tickets[0].name}</h1>
                    <p>Attached are your tickets. You can find all information about raizapalooza at <a href="https://raizapalooza.com/about/"> Raizapalooza.com </a></p>               
                    ${embedImages} 
                    <footer style="font-size: small; margin-top: 50px;">
                        <p style="margin:0 initial;">The Raizapalooza Terms & Conditons can be found at <a href="https://raizapalooza.com/terms">Raizapalooza.com/terms</a></p>   
                        <p>All information provided in this email is factual as far as we know. If you notice anything incorrect, or have other questions/concerns please contact us at  Raizapalooza@gmail.com</p>
                    </footer>
                </div>  
            `,
            attachments:attachments,
        });
    }catch(error){
        console.error(error)
    }
}
export async function sendEmailTickets(email){
    try{
        let tickets = await getTicketsByEmail(email);
        let generatedTickets = await generateTickets(tickets)
        let attachments = await createAttachments(generatedTickets)
        let embedImages = ''
        generatedTickets.map(i=>{
            embedImages += `<img style="margin:auto" alt="${'Ticket ID: '+i.ticketId}" src="${'cid:'+i.ticketId}" width="360" height="540" />`
        })
        let test = await transport.sendMail({
            from: 'tickets@raizapalooza.com',
            to: email,
            subject: 'Raizapalooza is Today at 4:00PM!',
            html: `
                <div style="text-align:center;" >
                    <h1>Today is the day!</h1>
                    <p>Doors open at 4:00pm, Be sure to have your ticket & id in hand!</p>
                    <p>There is no ATM on site. Cash, Credit & Debit will be accepted!</p>               
                    ${embedImages} 
                    <footer style="font-size: small; margin-top: 50px;">
                        <p style="margin:0 initial;">The Raizapalooza Terms & Conditons can be found at <a href="https://raizapalooza.com/terms">Raizapalooza.com/terms</a></p>   
                        <p>All information provided in this email is factual as far as we know. If you notice anything incorrect, or have other questions/concerns please contact us at  Raizapalooza@gmail.com</p>
                    </footer>
                </div>  
            `,
            attachments:attachments,
        });
        return true
    }catch(error){
        console.log("Error sending email to;",email)
        // console.error(error)
        return false
    }
}
export async function generateReceiptTable(paymentData){
    return(
        `
            <table>
                <tbody>
                    <tr>
                        <td>
                            Payed to:
                        </td>
                        <td>
                            Raiza Anne Mativo
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Business Address:
                        </td>
                        <td>
                            3036 Morely Trail NW, Calgary T2M 4H2
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Contact Email:
                        </td>
                        <td>
                            raiz.a.hand@gmail.com
                        </td>
                    </tr>
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
                           CAD $ ${(paymentData.amount/100).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Total Amount
                        </td>
                        <td>
                          CAD $ ${(paymentData.total/100).toLocaleString()}
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
            embedImages += `<img style="margin:auto" alt="${'Ticket ID: '+i.ticketId}" src="${'cid:'+i.ticketId}" width="360" height="540" />`
        })
        let receiptTable = await generateReceiptTable(paymentData)
        // console.log(attachments,embedImages)
        let test = await transport.sendMail({
            from: 'tickets@raizapalooza.com',
            to: paymentData.buyerEmail,
            subject: 'Raizapalooza Tickets',
            html: `
                <div style="text-align:center;" >
                    <h1> Hello ${paymentData.payeeName}</h1>
                    <p>Attached are your tickets & your receipt. You can find all information about raizapalooza at <a href="https://raizapalooza.com/about/"> Raizapalooza.com </a></p>               
                    ${embedImages} 
                    <h2>Receipt</h2>
                    <p>Thank you so much for your purchase! We could not do Raizapalooza without you!</p>
                    ${receiptTable}
                    <footer style="font-size: small; margin-top: 50px;">
                        <p style="margin:0 initial;">The Raizapalooza Terms & Conditons can be found at <a href="https://raizapalooza.com/terms">Raizapalooza.com/terms</a></p>   
                        <p>All information provided in this email is factual as far as we know. If you notice anything incorrect, or have other questions/concerns please contact us at  Raizapalooza@gmail.com</p>
                    </footer>
                </div>  
            `,
            attachments:attachments,
        });

    }catch (err){
        console.error(err)
    }


}