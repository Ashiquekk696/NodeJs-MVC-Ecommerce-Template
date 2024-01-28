const mongose = require('mongoose')
const otpSchema = mongose.Schema( 
    {  otp:{
        type:String
    },
    email:{
        type:String
    },
     expires_at:{
        type:String
    }
}
    
)

const OtpModel = mongose.model('otp_model', otpSchema);

module.exports = OtpModel;