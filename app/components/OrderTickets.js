'use server'
import {getAllTickets, getOrderTickets} from "@/app/lib/ticketServices";
import TicketDisplay from "@/components/TicketDisplay";
import Image from "next/image";
import QrEarly from "@/public/generatedPNGs/QRTicket.png";
import QrDoor from "@/public/generatedPNGs/QRRegular.png";
import Background from '@/public/background.png'
import CustomHeader from "@/components/layout/CustomHeader";
import QRCode from "qrcode";
import * as htmlToImage from "html-to-image";
import {createCanvas, loadImage} from "canvas";
import {Suspense} from "react";
import Loading from "@/components/Loading";


const getQrCode=async (ticketId)=>{
    return(qr)
}

async function genTicket(ticket) {
    const canvas = createCanvas(600, 900);
    const context = await canvas.getContext("2d");
    let image = await loadImage('public/generatedPNGs/QRRegular.png')
    await context.drawImage(image, 0, 0, 600, 900)
    const qrCanvas = createCanvas(445,410)
    QRCode.toCanvas(qrCanvas,process.env.NEXT_PUBLIC_QR_CODE_ENDPOINT+ticket.ticketId,{margin:1,width:445,color:{light:'#fffdcf',dark:'#121212'}})
    await context.drawImage(qrCanvas, 80, 435, 445, 410);
    return ({...ticket, ticketBlob: canvas.toDataURL()})
}
export async function TicketImage(ticket){
    let printTickets =  await genTicket(ticket);

    return(
        <div >{/* eslint-disable-next-line @next/next/no-img-element */}
            <img alt={'text'} src={printTickets.ticketBlob} />
        </div>
    )
}
export default async function OrderTickets({orderId}){
    let tickets = await getOrderTickets(orderId)
    let ticketBackground = undefined
    switch(tickets[0].tier){
        case('earlybird'):
            ticketBackground = QrEarly;
            break;
        case('door'):
            ticketBackground = QrDoor.toDataURL();
            break;
        default:
            ticketBackground = Background;
    }

    // console.log(printTickets)

    return(
        <>
            <div >
                {/*<Header/>*/}
                <CustomHeader title={"Raizapalooza"}/>
                <div className={'h-[100vh] grid'}>
                    <h2 className={'w-full text-center text-6xl pt-5 '}>Tickets Acquired!</h2>
                    <p className={'px-10 md:px-40'}>
                        You will receive an email with your tickets around a week before <span className={'font-tan-headline'}>Raizapalooza</span>.
                    </p>
                    <p className={'text-right px-10 md:px-40'}>
                        You may also download your tickets below, or change the contact info to have them sent to someone else!
                    </p>
                    <p className={'text-center p-2 text-2xl animate-bounce'}>
                        ↓
                        ↓
                        ↓
                        ↓
                    </p>
                </div>
                <Suspense fallback={<Loading loading={true}/>}>
                    {tickets.map((ticket,index)=>{
                        return (
                            <TicketDisplay key={ticket.id} ticket={ticket} index={index+1} count={tickets.length}>
                                {/*<Suspense fallback={<Loading loading={true}/>}>*/}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                <div id={ticket.ticketId}>
                                    <TicketImage ticket={ticket} />
                                </div>
                                {/*</Suspense>*/}
                            </TicketDisplay>
                        )
                    })}
                </Suspense>

            </div>
            {/*<QRCode*/}
            {/*    size={256}*/}
            {/*    style={{ position: "absolute", top: "0", left: "0" }}*/}
            {/*    bgColor="#4041d1"*/}
            {/*    fgColor="#fffdcf"*/}
            {/*    value={process.env.NEXT_PUBLIC_QR_CODE_ENDPOINT + ticketId}*/}
            {/*/>*/}
           <div className={'float fixed'}>
               <Image
                   id={'ticketImage'}
                   src={ticketBackground}
                   width={600}
                   height={900}
                   alt="Picture of the author"
               />
           </div>
        </>
    )
}