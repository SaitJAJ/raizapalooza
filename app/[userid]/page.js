// import { useState, useRef } from "react";
//
// import QRCode from "react-qr-code";
// import * as htmlToImage from "html-to-image";

export default function Page({ params }) {
  //
  // const temp = () => {
  //   htmlToImage
  //     .toSvg(qrcodeRef.current)
  //     .then((dataUrl) => {
  //       const link = document.createElement("a");
  //       link.download = "qrcode.svg";
  //       link.href = dataUrl;
  //       link.click();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };

  return (
    <>
      {/*{params.userid}*/}
      {/*<QRCode*/}
      {/*  ref={qrcodeRef}*/}
      {/*  size={256}*/}
      {/*  bgColor="#FFFF00"*/}
      {/*  fgColor="#FF00FF"*/}
      {/*  value={"http://localhost:3000/" + params.userid}*/}
      {/*/>*/}
      {/*<button onClick={temp}>click</button>*/}
    </>
  );
}
