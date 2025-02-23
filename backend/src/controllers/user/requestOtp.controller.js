import ApiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js";
import generateOtp from "../../utils/crypto.js";
import sendEmail from "../../utils/emailUtility.js";
import otpModel from "../../models/otp.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import consumerModel from "../../models/consumer/consumer.model.js";
import sellerModel from "../../models/seller/seller.model.js";

/**
 * Sends OTP to the user via email.
 * @param {string} email - User email.
 * @param {string} otp - Generated OTP.
 */
const sendOtpEmail = async (email, otp) => {
    const sentMailResponse = await sendEmail({
        to: email.trim(),
        subject: "Your OTP for Verification",
        text: `Your OTP: ${otp}`,
        html: `<p>Your OTP is <strong>${otp}</strong>.</p>`,
    });

    if (sentMailResponse.accepted.length === 0) {
        throw new ApiError(500, "Failed to send OTP email, please try again.");
    }
};

/**
 * Generates and sends OTP for user authentication (signup/login).
 */
const generateAndSendOtp = asyncHandler(async (req, res) => {
    const { email, mode, userType } = req.body;

    // Validate input fields
    if (!email?.trim()) throw new ApiError(400, "Email is required");
    if (!mode) throw new ApiError(400, "Mode is required");
    if (!userType) throw new ApiError(400, "User type is required");

    const validModes = ["otp_signup", "otp_login"];
    const validUserTypes = ["consumer", "seller"];

    if (!validModes.includes(mode)) throw new ApiError(400, "Invalid mode");
    if (!validUserTypes.includes(userType)) throw new ApiError(400, "Invalid user type");

    // Get the corresponding model
    const model = userType === "consumer" ? consumerModel : sellerModel;
    const checkUserEntry = await model.findOne({ email });

    // Validate signup/login scenarios
    if (mode === "otp_signup" && checkUserEntry) {
        throw new ApiError(400, "User already exists.");
    }
    if (mode === "otp_login" && !checkUserEntry) {
        throw new ApiError(400, "Email is not registered.");
    }

    // Generate OTP
    const otp = generateOtp();

    // Send OTP email
    await sendOtpEmail(email, otp);

    // Store OTP in database (Insert or Update)
    const updateResult = await otpModel.updateOne(
        { email },
        { $set: { otp,userType, createdAt: new Date() } },
        { upsert: true }
    );

    if (!updateResult.acknowledged) {
        throw new ApiError(500, "Failed to store OTP, please try again.");
    }

    return res.status(200).json(new ApiResponse(200, { message: "OTP successfully sent" }, "success"));
});

export default generateAndSendOtp;
