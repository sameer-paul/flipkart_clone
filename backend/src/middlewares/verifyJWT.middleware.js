import jwt from "jsonwebtoken"
import ApiError from "../utils/apiError.js"
import asyncHandler from "../utils/asyncHandler.js"
import sellerModel from "../models/seller/seller.model.js"
import consumerModel from "../models/consumer/consumer.model.js"


const verifyJWT = asyncHandler(async(req,_,next) => {
    try { 
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","")
        if (!token ) {
            throw new ApiError(401,"unauthorized request")
        }
        const {_id,userType} = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)
        const model = userType === "consumer" ? consumerModel : sellerModel
        const userDetail = await model.findById({_id})
        if (!userDetail) throw new ApiError(404, "User not found. The account associated with this token may have been deleted or does not exist.");
        req.userDetail = {_id,userType}
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid access token")
    }
})

export default verifyJWT