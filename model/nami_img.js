const mongose = require('mongoose')


const namiimgSchema = mongose.Schema({

    "profile_pic_url":{
        type:String, 
    },
    // "confirm_password":{
    //     type:String,
    //     required:true
    // },
})

exports.NamiPic = mongose.model('NamiPic',namiimgSchema)
 