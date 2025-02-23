import consumerModel from "../models/consumer/consumer.model.js";
import ApiError from "../utils/apiError.js"
import asyncHandler from "../utils/asyncHandler.js"
import jwt from "jsonwebtoken"


const options = {
    httpOnly: true,
    secure: true
}

const refreshAccessToken = asyncHandler(async (req,res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

        if(!incomingRefreshToken){
            throw new ApiError(401,"unauthorized request")
        }

        try {
            const decodedToken = jwt.verify(incomingRefreshToken,process.env.REFRESH_TOKEN_SECRET)
    
            const user = await consumerModel.findById(decodedToken?._id)
    
            if(!user) {
                throw new ApiError(401,"invalid refresh token")
            }
    
            if(incomingRefreshToken !== user?.refreshToken) {
                throw new ApiError(401,"refresh token expired")
            }
    
    
            const newAccessToken = userEntry.generateAccessToken()
            const newRefreshToken = userEntry.generateRefreshToken()
            
    
            userEntry.refreshToken = newRefreshToken
            await userEntry.save({validateBeforeSave: false})
    
            
    
            return res
            .status(200)
            .cookie("accessToken",newAccessToken,options)
            .cookie("refreshToken",newRefreshToken,options)
            .json(new ApiResponse(200,{"user":"login success",accessToken:newAccessToken,refreshToken:newRefreshToken},"success"))
        } catch (error) {
            throw new ApiError(401,error?.message || "invalid refresh token")
        }

    }
)
export default refreshAccessToken