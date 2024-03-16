import mongoose from "mongoose";
const { Schema, model } = mongoose;

try {
  await mongoose.connect(
    process.env.MONGODB_URI
  );
} catch (e) {
  console.log(e);
}

const testSchema = new Schema({
  ticketId: String,
  name: String,
  raffle: Number,
});
const Test = mongoose.models.Test || model("Test", testSchema);
export default Test;
