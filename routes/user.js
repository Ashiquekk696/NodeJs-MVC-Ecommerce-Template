const express = require('express');
const router = express.Router();
const {signUp,logIn,forgotPassword,uploadImage} = require('../controller/user_controller')
const upload = require('../config/multer_config')
const cloudinary = require('../config/cloudinary_config')
router.post('/signUp',upload.single("image"),signUp)
router.post('/uploadImage',upload.single("image"),uploadImage)
router.post('/login',logIn)
router.post('/forgotPassword',forgotPassword)
module.exports=router