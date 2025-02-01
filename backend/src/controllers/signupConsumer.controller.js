import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/apiResponse.js"
import ApiError from "../utils/apiError.js"
import userModel from "../models/consumer/user.model.js"
import otpModel from "../models/otp.model.js"

const options = {
    httpOnly: true,
    secure: true
}


const signupConsumer = asyncHandler(async(req,res) => {

    // take user credential
    const {email,otp} = req.body

    // Validate fields
    if (!otp) {
        throw new ApiError(400, "otp is required")
    }

    const otpEntry = await otpModel.findOne({email})
    
    if (!otpEntry) {
        throw new ApiError(400, "OTP does not exist or is invalid");
    }

    if(otpEntry.otp.toString() !== otp){
        throw new ApiError(400,"please enter correct otp")
    }

    const userEntry = await userModel.create({email})
    
    if(!userEntry){
        throw new ApiError(500,"something went wrong please try again")
    }

    const accessToken = userEntry.generateAccessToken()
    const refreshToken = userEntry.generateRefreshToken()

    userEntry.refreshToken = refreshToken
    await userEntry.save({validateBeforeSave: false})

    await otpModel.deleteOne({ email });

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new ApiResponse(200,{"user":"user successfully created",accessToken,refreshToken},"success"))
})

export default signupConsumer