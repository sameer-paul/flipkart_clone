import asyncHandler from "../../utils/asyncHandler.js"
import ApiResponse from "../../utils/apiResponse.js"
import ApiError from "../../utils/apiError.js"
import consumerModel from "../../models/consumer/consumer.model.js";
import otpModel from "../../models/otp.model.js"
import generateAccessAndRefreshToken from "../../utils/generateAccessAndRefreshToken.utility.js";
import sellerModel from "../../models/seller/seller.model.js";


const options = {
    httpOnly: true,
    secure: true
}




const signupAndLoginConsumer = asyncHandler(async(req,res) => {
    // take user credential
    const {email,otp,mode,userType} = req.body

    // Validate fields
    if (!otp && email && mode && userType) throw new ApiError(400, "One or more required fields are missing. Please provide 'otp', 'email', 'mode', and 'userType'.");
    
    const otpEntry = await otpModel.findOne({email})
        
    if (!otpEntry) throw new ApiError(401, "OTP does not exist or is invalid");

    if(otpEntry.otp.toString() !== otp) throw new ApiError(400,"please enter correct otp")

    const model = userType === "consumer"? consumerModel:sellerModel

    
    let user

    if (mode === "signup") {
        user = await model.create({email,userType})
    }

    const {accessToken, refreshToken} =  await generateAccessAndRefreshToken(email,model,user,mode)

    await otpModel.deleteOne({ email });

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(new ApiResponse(200,{accessToken,refreshToken},"success"))
})

export default signupAndLoginConsumer