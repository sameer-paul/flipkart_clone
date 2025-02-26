import sellerModel from "../../models/seller/seller.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";
import deepMerge from "../../utils/deepMerge.utility.js";
import checkMissingField from "../../utils/isComplete.utility.js";

const excludeFields = ["_id", "__v", "createdAt", "updatedAt", "refreshToken"]

const readSellerInfo = asyncHandler(async (req, res) => {
    // Get _id from req.userDetail
    const { _id } = req.userDetail;

    // Fetch seller data
    const sellerInfo = await sellerModel.findById(_id);

    // Convert Mongoose document to a plain object
    const sellerData = sellerInfo.toObject();
    const schemaFields = Object.keys(sellerModel.schema.paths)
    
    // Check for missing fields dynamically (exit early if any field is missing)
    const isComplete = checkMissingField(schemaFields,sellerData,excludeFields)
    
    return isComplete? 
    res.status(200).json(new ApiResponse(200,{},"seller info is complete")): 
    res.status(400).json(new ApiResponse(400,{},"seller info is missing"))
    
});


const updateSellerInfo = asyncHandler(async(req,res) => {
    // Get the _id from userDetail
    const{_id} = req.userDetail
    
    // Receives incoming data 
    const incomingData = req.body

    const sellerInfo = await sellerModel.findById(_id);

    // Convert Mongoose document to a plain object
    const sellerData = sellerInfo.toObject();
    const schemaFields = Object.keys(sellerModel.schema.paths)
    const mergedData = deepMerge(sellerData,incomingData)
    const isIncomplete = checkMissingField(schemaFields,mergedData,excludeFields)
    if (isIncomplete) return res.status(400).json(new ApiResponse(400, null, "Missing fields encountered"));
    
    // Perform the update in the database
    await sellerModel.findByIdAndUpdate(_id, { $set: incomingData }, { new: true, runValidators: true });

    return res.status(200).json(new ApiResponse(200, {}, "Seller info updated successfully"));
})


const deleteSellerInfo = asyncHandler(async(req,res) => {
    const{_id,userType} = req.userDetail
    return res.send("this controller is not completed")
})

export {readSellerInfo,updateSellerInfo,deleteSellerInfo}