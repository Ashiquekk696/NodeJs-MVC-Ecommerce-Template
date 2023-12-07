const cloudinary = require("cloudinary")

cloudinary.config({
    // cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    // api_key:process.env.CLOUDINARY_API_KEY,
    // api_secret:process.env.CLOUDINARY_API_SECRET
    cloud_name:"dbxlyjxz8",
    api_key:"143578843719898",
    api_secret:"xXDcOva8sa0ELcoSMNrDdINbqg4"
})

module.exports = cloudinary;