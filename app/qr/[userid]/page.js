import mongoose from "mongoose";
import QRCode from "react-qr-code";
import Test from "@/models/Test";

export default async function Page({ params }) {
  try {
    await mongoose.connect(
      "mongodb+srv://Adam:CtcAFsoROaxuGu3n@testdb.txgpqaz.mongodb.net/?retryWrites=true&w=majority&appName=TestDB"
    );
  } catch (e) {
    console.log(e);
  }

  const test = await Test.exists({ ticketId: params.userid });
  const test2 = await Test.findById(test._id);

  return (
    <>
      <QRCode
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
        value={"http://localhost:3000/" + test2.ticketId}
      />
      {test2.raffle}
    </>
  );
}
