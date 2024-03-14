"use client";
import { useRef } from "react";
import * as htmlToImage from "html-to-image";
import QRCode from "react-qr-code";
import { useRouter } from "next/navigation";
import Hyperlink from "@/components/Hyperlink";
import Button from "./Button";

export default function QrGenerator({ ticketId }) {
  const qrcodeRef = useRef(null);
  const router = useRouter();
  const download = () => {
    htmlToImage
      .toSvg(qrcodeRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "qrcode.svg";
        link.href = dataUrl;
        link.click();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <QRCode
        ref={qrcodeRef}
        size={256}
        bgColor="#FFFFFF"
        fgColor="#000000"
        value={"http://localhost:3000/api/" + ticketId}
      />
      <Hyperlink href={"/tickets/info/" + ticketId}>View Ticket Info</Hyperlink>
      <Button value={"download"} onClick={download}></Button>
    </>
  );
}
