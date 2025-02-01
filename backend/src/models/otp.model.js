import {Schema,model} from "mongoose";

const otpSchema = new Schema({
    email: {type: String,required: true},
    otp: {type: Number,required: true},
    createdAt: {type:Date, default: Date.now, expires:180}
})

export default model('Otp',otpSchema)