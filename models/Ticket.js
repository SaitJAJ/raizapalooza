import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  ticketId: String,
  paymentId:String,
  orderId:String,
  paymentDate:Date,
  name: String,
  email: String,
  phone: String,
  birthday: Date,
  tier: String,
  raffle: {type:Number, default: 0},
  admission: { type: Boolean, default: true },
  receiptUrl:String,
  paymentType:String,
});
const Ticket = mongoose.models.Ticket || model("Ticket", ticketSchema);
export default Ticket;
