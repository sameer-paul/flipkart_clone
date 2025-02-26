import productModel from "../../models/seller/product.model.js";
import ApiResponse from "../../utils/apiResponse.js";
import asyncHandler from "../../utils/asyncHandler.js";

const deListProduct = asyncHandler(async(req,res) => {
    const {productId} = req.body

    const product = await productModel.findByIdAndDelete(productId)

    return res.status(200).json(new ApiResponse(200,"product deleted successfully",product))
})

export default deListProduct