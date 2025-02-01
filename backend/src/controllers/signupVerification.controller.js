import ApiError from "../utils/apiError.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/consumer/user.model.js";
import generateOtp from "../utils/crypto.js";
import sendEmail from "../utils/emailUtility.js";
import otpModel from "../models/otp.model.js";
import ApiResponse from "../utils/apiResponse.js";

const signupVerification = asyncHandler(async(req,res) => {

    // take user credential
    const {email} = req.body
    
    // Validate fields
    if (!email?.trim()) {
        throw new ApiError(400, "Either email or contact number is required")
    }
    
    // Check if the user already exists
    const checkUser = await User.findOne({email});

    if (checkUser) {
        throw new ApiError(400, "User already exists");
    }

    const otp = generateOtp()

    // check if otp is already available for the corresponding email
    const checkOtpEntry = await otpModel.findOne({email});

    if (checkOtpEntry) {
        const sentMailResponse = await sendEmail({
            to: email.trim(),
            subject: "Your OTP for Verification",
            text: `Your OTP : ${otp}`,
            html: `<p>Your OTP is <strong>${otp}</strong>.</p>`,
        })
        
        if(sentMailResponse.accepted.length === 0) {
            throw new ApiError(500,"something went wrong please try again")
        }
    
        const saveOtpResponse = await otpModel.updateOne(
            {email},
            {
                $set: {
                    otp,
                    createdAt: new Date()
                }
            }
        )
    
        if(!saveOtpResponse){
            throw new ApiError(500,"something went wrong please try again")
        }
           
        return res.status(200).json(new ApiResponse(200,{"message":"otp successfully sent"},"success"))
    }
    
    

    const sentMailResponse = await sendEmail({
        to: email.trim(),
        subject: "Your OTP for Verification",
        text: `Your OTP : ${otp}`,
        html: `<p>Your OTP is <strong>${otp}</strong>.</p>`,
    })
    
    if(sentMailResponse.accepted.length === 0) {
        throw new ApiError(500,"something went wrong please try again")
    }

    const saveOtpResponse = await otpModel.create({email,otp})

    if(!saveOtpResponse){
        throw new ApiError(500,"something went wrong please try again")
    }
       
    return res.status(200).json(new ApiResponse(200,{"message":"otp successfully sent"},"success"))

})

export default signupVerification