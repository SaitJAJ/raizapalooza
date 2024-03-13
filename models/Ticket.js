import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  ticketId: String,
  name: String,
  email: String,
  phoneNumber: String,
  birthday: Date,
  tier: String,
  raffle: Number,
  admission: { type: Boolean, default: true },
});
const Ticket = mongoose.models.Ticket || model("Ticket", ticketSchema);
export default Ticket;
