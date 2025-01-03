import mongoose, {Schema} from 'mongoose'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

const addressSchema = new Schema({
    line_1: { type: String, required: true },
    line_2: { type: String, required: true },
    pincode: { type: String, required: true, match: /^\d{6}$/ },
    landmark: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true }
})


const customerUserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        index: true
    },
    password: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        enum: ["male","female"]
    },
    address: addressSchema,
    history: [
        {
            type: Schema.Types.ObjectId,
            ref: "product"
        }
    ]
},{timestamps:true})

customerUserSchema.pre('save',async function (next) {
    if(!this.isModified("password")) return next()
    this.password = bcrypt.hash(this.password,process.env.salt)
    next()
})

customerUserSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password,this.password)
}

customerUserSchema.methods.generateAccessToken = function () {
    return jwt.sign({
        _id: this._id,
    },process.env.ACCESS_TOKEN_SECRET,{expiresIn: process.env.ACCESS_TOKEN_EXPIRY})
}

customerUserSchema.methods.generateRefreshToken = function () {
    jwt.sign({
        _id: this._id,
    },process.env.REFRESH_TOKEN_SECRET,{expiresIn: process.env.REFRESH_TOKEN_EXPIRY})
}

const User = mongoose.model("User",customerUserSchema)

export default User