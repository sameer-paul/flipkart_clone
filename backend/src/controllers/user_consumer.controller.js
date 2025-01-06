import asyncHandler from "../utils/asyncHandler.js"

const registerConsumer = asyncHandler(async(req,res,next) => {
    return res.status(200).json({
        message : "ok"
    })
})

export default registerConsumer