import {Schema,model} from 'mongoose'
import jwt from 'jsonwebtoken'



const customerUserSchema = new Schema({
    email: {
        type: String,
        dafault: "empty"
    },
    contact: {
        type: String,
        default: "0000000000",
        minlength: 10,
        maxlength: 10
    },
    refreshToken: {
        type: String
    },
    cart: {
        type: Schema.Types.objectId,
        ref: "cart"
    }


},{timestamps:true})


customerUserSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

customerUserSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn: process.env.REFRESH_TOKEN_EXPIRY})
}

export default model("customer",customerUserSchema)

