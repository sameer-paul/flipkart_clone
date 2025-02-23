import {Schema,model} from 'mongoose'
import jwt from 'jsonwebtoken'

// Seller Schema
const sellerSchema = new Schema({
    email: { type: String, trim: true, unique: true, sparse: true }, // Sparse allows uniqueness with null values
    contact: { type: String, unique: true, sparse: true },
    refreshToken: { type: String },
    userType: {type: String},
    storeName: { type: String, trim: true },
    storeIcon: { type: String }
}, { timestamps: true });

sellerSchema.methods.generateAccessToken = function () {
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

sellerSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn: process.env.REFRESH_TOKEN_EXPIRY})
}

export default model("seller",sellerSchema)