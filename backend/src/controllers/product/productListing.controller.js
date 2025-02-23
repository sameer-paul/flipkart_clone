import asyncHandler from "../../utils/asyncHandler.js";


const productListing = asyncHandler(async(req,res) => {
    console.log(req.userDetail);
    res.send("created successfully")
})

export default productListing