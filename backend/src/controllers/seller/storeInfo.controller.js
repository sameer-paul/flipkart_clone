import storeModel from "../../models/seller/store.model.js";
import ApiError from "../../utils/apiError.js";
import asyncHandler from "../../utils/asyncHandler.js"
import ApiResponse from "../../utils/apiResponse.js";
import { Types } from "mongoose";

const getStoreCategory = asyncHandler(async (req, res) => {
    const {_id} = req.userDetail;
    const {storeCategory} = req.body
    const sellerId = new Types.ObjectId(_id);
    const stores = await storeModel.aggregate([
        { 
            $match: { 
                sellerId,  
                storeCategory
            }  
        } 
    ]);
    res.status(200).json(new ApiResponse(200, stores, "Stores fetched successfully"));
});

const createStore = asyncHandler(async(req,res) => {
    const sellerId = req.userDetail._id;
    const {storeCategory,name} = req.body;
    if (!storeCategory) throw new ApiError(400, "Category is required");
    const store = await storeModel.create({sellerId,storeCategory,name});
    if (!store) throw new ApiError(400, "Store limit reached for this category. You cannot create multiple stores under the same category");
    return res.status(201).json(new ApiResponse(201, {}, "Store created successfully"));
}) 

const deleteStore = asyncHandler(async(req,res) => {
    return res.send("this controller is not completed")
}) 

export {createStore,deleteStore,getStoreCategory}