const {TWILIO_SID,TWILIO_AUTH_TOKEN,TWILIO_SERVICE_SID} = process.env;

const client = require('twilio')("AC5a0d9fa2599e7372f2a72299938a8486","86b0e590f43c7f69ab346d371e2469db",{
    lazyLoading:true
})

exports.sendOtp =async (req,res) =>{
    const {countryCode,phoneNumber} = req.body;
    try {
        const otpResponse = client.verify.v2.services("VA688cebac07f8687522f96dcfa342fb11").verifications.create({
            to : "+"+countryCode+phoneNumber,
            
            channel :"sms"
        })
        res.status(201).json("OTp Send successfully:"+otpResponse)
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}


exports.verifyOtp =async (req,res) =>{
    const {countryCode,phoneNumber,otp} = req.body;
    try {
        const verifiedResponse = client.verify.v2.services("VA688cebac07f8687522f96dcfa342fb11").verificationChecks.create({
            to : "+"+countryCode+phoneNumber,
            code:otp
        })
        res.status(201).json("Otp verified successfully:"+otpResponse)
    } catch (error) {
        console.log(error);
        res.status(401).json(error)
    }
}