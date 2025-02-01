import jwt from 'jsonwebtoken'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/apiError.js'
import userModel from '../models/consumer/user.model.js'

const options = {
    httpOnly: true,
    secure: true
}

const verifyJWT = asyncHandler(async(req,_,next) => {
    try {
        const token = req.cookie?.accessToken || req.header("Authorization")?.replace("Bearer ","")
    
        if (!token ) {
            throw new ApiError(401,"unauthorized request")
        }
    
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET)

        const userId = await userModel.findById(decodedToken?._id).select("-contact -refreshToken")

        if(!userId){
            throw new ApiError(401,"Invalid access token")
        }

        req.userId = userId

        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid access token")
    }
})

export default verifyJWT