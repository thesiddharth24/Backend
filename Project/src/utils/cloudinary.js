import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'




          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null

        //upload the file on cloudnary 
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:'auto'
        });
        //file has been uploaded succesfully
        console.log("File is uploaded on cloudnary",response.url);

        return response;

    }catch(err){
        //Sync matlb here this work has to be done 
        fs.unlinkSync(localFilePath);
        //remove the localy saved temraray file as the upload operation got failed 
        return null;
    }
}


export {uploadOnCloudinary}