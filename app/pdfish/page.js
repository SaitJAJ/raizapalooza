"use client";
import jsPDF from "jspdf";
import Image from "next/image";

export default function Home() {
  const GeneratePdf = () => {
    const doc = new jsPDF();
    let image = document.getElementById("image").getAttribute("src");
    let image2 = document.getElementById("image2").getAttribute("src");
    doc.addImage(image, "JPEG", 15, 15, 100, 100);
    doc.addImage(image2, "JPEG", 25, 25, 70, 70);
    doc.output("dataurlnewwindow");
  };
  return (
    <>
      <Image
        id={"image"}
        alt={"example pdf"}
        src={"/test.jpg"}
        height={100}
        width={100}
      />
      <Image
        id={"image2"}
        alt={"example jpeg"}
        src={"/temp2.jpg"}
        height={100}
        width={100}
      />
      <button onClick={GeneratePdf}>click</button>
    </>
  );
}
