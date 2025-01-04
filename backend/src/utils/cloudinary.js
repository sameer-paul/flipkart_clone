import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'


// Configuration
cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.API_KEY, 
    api_secret: process.env.API_SECRET // Click 'View API Keys' above to copy your API secret
});


const cloudinaryUpload = async (localFilePath) => {
    try {
        if(!localFilePath) return null

        //upload file on cloudinary
        const uploadResult =  await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
        })
        //success upload
        console.log("file uploaded successfully",uploadResult.url);
        return uploadResult
    } catch (error) {
        fs.unlinkSync(localFilePath) //remove locally saved temporary file 
        return null
    }
}

export default cloudinaryUpload