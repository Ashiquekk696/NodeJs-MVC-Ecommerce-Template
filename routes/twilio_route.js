const express = require('express')
const router = express.Router();

const {sendOtp:sendOtp,verifyOtp:verifyOtp}=require("../controller/twilio_sms_controller")

router.post('/sendOtp',sendOtp)
module.exports= router