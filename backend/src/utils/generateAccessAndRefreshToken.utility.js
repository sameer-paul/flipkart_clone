const generateAccessAndRefreshToken = async(email,model,user,mode) => {
    try {
        // If user instance is not provided, fetch from DB (for login mode)
        const existingUser = mode==="login" ? await model.findOne({email}) : user
        const accessToken = existingUser.generateAccessToken()
        const refreshToken = existingUser.generateRefreshToken()
        existingUser.refreshToken = refreshToken
        
        await existingUser.save({validateBeforeSave:false})
        return {accessToken,refreshToken}
    } catch (error) {
        throw new ApiError(500,"An unexpected error occurred while processing your request. Please try again later.",error.message)
    }
}


export default generateAccessAndRefreshToken