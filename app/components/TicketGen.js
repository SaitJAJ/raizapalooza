"use client";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import Button from "@/components/Button";
import QrReg from "@/public/generatedPNGs/QRRegular.png";
import QrEarly from "@/public/generatedPNGs/QRTicket.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function TicketGen({
  ticketId,
  ticketTier,
  initName,
  initEmail,
}) {
  const qrcodeRef = useRef(null);
  const canvasRef = useRef(null);
  const earlyRef = useRef(null);
  const [drawn, setDrawn] = useState(false);
  const [name, setName] = useState(initName);
  const [email, setEmail] = useState(initEmail);

  const download = () => {
    htmlToImage
      .toPng(canvasRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Ticket for " + name + ".png";
        link.href = dataUrl;
        link.click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    htmlToImage.toCanvas(earlyRef.current).then(function (early) {
      context.drawImage(early, 0, 0, 600, 900);

      htmlToImage.toCanvas(qrcodeRef.current).then(function (canvasQR) {
        context.drawImage(canvasQR, 65, 425, 475, 440);
        setDrawn(true);
      });
    });
  }, []);
  return (
    <>
      <canvas ref={canvasRef} width={600} height={900} />
      {drawn ? (
        <form className="flex flex-col pl-2">
          <label>
            Name:{" "}
            <input
              placeholder={name}
              className="h-10"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Email:{"  "}
            <input
              placeholder={email}
              className="h-10"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <Button value={"Download Ticket"} onClick={download} />
          <Image
            ref={earlyRef}
            src={QrEarly}
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
          <QRCode
            ref={qrcodeRef}
            size={256}
            bgColor="#4041d1"
            fgColor="#fffdcf"
            value={process.env.QR_CODE_ENDPOINT + ticketId}
          />
        </form>
      ) : (
        <>
          <QRCode
            ref={qrcodeRef}
            size={256}
            style={{ position: "absolute", top: "0", left: "0" }}
            bgColor="#4041d1"
            fgColor="#fffdcf"
            value={process.env.QR_CODE_ENDPOINT + ticketId}
          />
          <Image
            ref={earlyRef}
            src={QrEarly}
            width={1000}
            height={1000}
            alt="Picture of the author"
          />
        </>
      )}
    </>
  );
}
