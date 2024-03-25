"use client";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import QrReg from "@/public/generatedPNGs/QRRegular.png";
import QrEarly from "@/public/generatedPNGs/QRTicket.png";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function TicketGen({ ticketId, ticketTier }) {
  const qrcodeRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    htmlToImage.toCanvas(canvasRef.current).then(function (canvasBack) {
      const DOMcanvas = canvasRef.current;
      DOMcanvas.replaceWith(canvasBack);

      htmlToImage.toCanvas(qrcodeRef.current).then(function (canvasQR) {
        const context = canvasBack.getContext("2d");
        console.log(canvasBack);
        context.drawImage(canvasQR, 100, 640, 700, 650);
      });
    });

    // htmlToImage.toCanvas(canvasRef.current).then(function (canvas) {
    //   const DOMcanvas = canvasRef.current;
    //   DOMcanvas.replaceWith(canvas);
    //   console.log(canvas);
    //   const context = canvas.getContext("2d");
    //   const img = new Image();
    //   //context.addImage(QrCode, 0, 0);
    // });
  }, []);

  // context.fillStyle = "#000000";
  // context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  // earlyImage.onload = () => {
  // /context.drawImage(QR, 0, 0);
  // };

  return (
    <>
      <Image
        ref={canvasRef}
        src={QrEarly}
        width={1000}
        height={1000}
        alt="Picture of the author"
      />
      <div>
        <QRCode
          ref={qrcodeRef}
          size={256}
          style={{ position: "absolute", top: "0", left: "0" }}
          bgColor="#4041d1"
          fgColor="#fffdcf"
          value={process.env.QR_CODE_ENDPOINT + ticketId}
        />
      </div>
    </>
  );
}
