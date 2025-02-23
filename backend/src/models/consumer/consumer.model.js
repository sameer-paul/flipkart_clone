import {Schema,model} from 'mongoose'
import jwt from 'jsonwebtoken'

const consumerSchema = new Schema({
    email: {type: String},
    contact: {type: String},
    refreshToken: {type: String},
    userType: {type: String}
    
},{timestamps:true})

consumerSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            userType: this.userType
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

consumerSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn: process.env.REFRESH_TOKEN_EXPIRY})
}

export default model("consumer",consumerSchema)