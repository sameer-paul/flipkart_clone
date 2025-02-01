import userModel from "../models/consumer/user.model.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const options = {
    httpOnly: true,
    secure: true
}


const logoutConsumer = asyncHandler(async(req,res) => {
    await userModel.findByIdAndUpdate(
        req.userId._id,
        {
            $set : {
                refreshToken : undefined
            }
        },
        {
            new: true
        }
    )

    return res
    .status(200)
    .clearCookie("accessToken",options)
    .clearCookie("refreshToken",options)
    .json(new ApiResponse(200,{},"User logged out"))

})

export default logoutConsumer
