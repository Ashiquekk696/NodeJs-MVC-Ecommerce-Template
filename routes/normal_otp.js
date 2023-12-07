const express = require('express');
const router = express.Router();
const {sentNormalOtp} = require('../controller/ normal_otp_controller')

router.post('/sentNormalOtp',sentNormalOtp)

module.exports = router