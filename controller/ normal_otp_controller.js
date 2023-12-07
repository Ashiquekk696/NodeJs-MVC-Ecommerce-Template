
const otpGenerator = require('otp-generator');
const OtpModel = require('../model/Otp_model');

exports.sentNormalOtp = async (req,res) =>{
    try {
        const otp = otpGenerator.generate(6, { digits: true, alphabets: false, upperCase: false }).toString();
        const {mobile} =await req.body;
        console.log("otp",otp);
        // Set OTP expiration time (e.g., 5 minutes from now)
        const expiresAt = new Date();
        expiresAt.setMinutes(expiresAt.getMinutes() + 5).toString();
        const otpEntry = new OtpModel({  otp,mobile, expiresAt });
        await otpEntry.save();

        const client = require('twilio')(
            process.env.TWILIO_ACCOUNT_SID,
            process.env.TWILIO_AUTH_TOKEN
          );
          //have to implement this after purchasing twilio phone number fro twilio console
          client.messages.create({
            from: process.env.TWILIO_PHONE_NUMBER,
            to: process.env.CELL_PHONE_NUMBER,
            body: "You just sent an SMS from Node.js using Twilio!"
          }).then((messsage) => console.log(message.sid));
        res.status(201).json({ message: 'OTP sent successfully' });
        
    } catch (e) {
        console.log("otp sent successfully",e);
    }
}