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
      <div className={"flex justify-around my-8"}>
        <QRCode
          ref={qrcodeRef}
          size={256}
          bgColor="#4041d1"
          fgColor="#fffdcf"
          value={process.env.QR_CODE_ENDPOINT + ticketId}
        />
      </div>

      <Hyperlink href={"/tickets/info/" + ticketId}>View Ticket Info</Hyperlink>
    </>
  );
}
