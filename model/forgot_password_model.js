const mongose = require('mongoose')

const forgotPasswordSchema = mongose.Schema(
    
    {   
 email:{
    type:String
 },
 otp:{
    type:String
 }
    }
)

const ForgotPasswordModel = mongose.model('forgotPassword', forgotPasswordSchema);

module.exports = ForgotPasswordModel;