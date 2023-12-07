const mongose = require('mongoose')


const signUpSchema = mongose.Schema({
    "name":{
        type:String,
        required:true
    },
    "email":{
        type:String,
        required:true
    },
    "password":{
        type:String,
        required:true
    },
    "profile_pic_url":{
        type:String, 
    },
    // "confirm_password":{
    //     type:String,
    //     required:true
    // },
})

exports.User = mongose.model('User',signUpSchema)
 