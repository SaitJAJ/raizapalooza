"use client";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import Button from "@/components/Button";
import QrReg from "@/public/generatedPNGs/QRRegular.png";
import QrEarly from "@/public/generatedPNGs/QRTicket.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TextInput from "@/components/TextInput";

const ticketSizes ={
  large:{
    winSize:1024,
    width:600,
    height:900,
    qrPosX:65,
    qrPosY:425,
    qrWidth:475,
    qrHeight:440,
  },
  medium:{
    winSize:768,
    width:400,
    height:600,
    qrPosX:48,
    qrPosY:288,
    qrWidth:308,
    qrHeight:285,
  },
  small:{
    winSize:640,
    width:300,
    height:450,
    qrPosX:35,
    qrPosY:216,
    qrWidth:232,
    qrHeight:214,
  }
}


export default function TicketGen({
  ticketId,
  ticketTier,
  ticketCount,
                                    ticketIndex,
}) {
  const qrcodeRef = useRef(null);
  const canvasRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [screenSize,setScreenSize] = useState(ticketSizes.small)

  const download = () => {
    htmlToImage
      .toPng(canvasRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Raizapalooza Ticket ${ticketIndex} of ${ticketCount}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(()=>{
    const changeTicket=()=>{
      switch(true){
        // case(window.innerWidth > ticketSizes.medium.winSize):
        //   setScreenSize(ticketSizes.medium)
        //   break
        case(window.innerWidth > ticketSizes.medium.winSize):
          setScreenSize(ticketSizes.medium)
          break
        default:
          setScreenSize(ticketSizes.small)
          break
      }
    }
    window.addEventListener('resize',changeTicket)

    return()=>{
      window.removeEventListener('resize',changeTicket)
    }
  },[])

  useEffect(() => {
    console.log('running')
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    htmlToImage.toCanvas(document.getElementById('ticketImage')).then(function (early) {
      context.drawImage(early, 0, 0, screenSize.width,screenSize.height);
      htmlToImage.toCanvas(qrcodeRef.current).then(function (canvasQR) {
        context.drawImage(canvasQR, screenSize.qrPosX, screenSize.qrPosY, screenSize.qrWidth, screenSize.qrHeight);
        setDrawn(true);
      });
    });
  }, [screenSize,drawn]);

  return (
    <div className={'flex flex-wrap justify-around w-full '}>
      <canvas ref={canvasRef} width={screenSize.width} height={screenSize.height} />
      <div className={'w-full'}>
        <Button value={'Download Ticket'} onClick={download}/>
      </div>
      <div className={'float fixed right-0'}>
        <QRCode
            ref={qrcodeRef}
            size={256}
            style={{ position: "absolute", top: "0", left: "0" }}
            bgColor="#4041d1"
            fgColor="#fffdcf"
            value={process.env.NEXT_PUBLIC_QR_CODE_ENDPOINT + ticketId}
        />
      </div>
    </div>
  );
}
