import mongoose from "mongoose";
const { Schema, model } = mongoose;

const accountSchema = new Schema({
    email:String,
    name:String,
    password:String,
})

const Account = mongoose.models.Account || model('Account',accountSchema);
export default Account;