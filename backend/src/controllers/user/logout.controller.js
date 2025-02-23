import consumerModel from "../../models/consumer/consumer.model.js";
import sellerModel from "../../models/seller/seller.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";


const options = {
    httpOnly: true,
    secure: true
}

const logout = asyncHandler(async(req,res) => { 
    const {_id,userType} = req.userDetail
    
    const model = userType === "consumer" ? consumerModel : sellerModel
    
    await model.findByIdAndUpdate(
        _id,
        {
            $set:{
                refreshToken : null
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

export default logout
