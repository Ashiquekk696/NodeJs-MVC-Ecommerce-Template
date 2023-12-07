const mongose = require('mongoose')

const orderSchema = mongose.Schema(
    
    {   
       // _id : mongose.Schema.Types.Decimal128,
        name:{
            type: String,
            required :true
        },
       id :{
            type:String
        },
    userId :{
        type:String
    }, quantity:{
        type:Number,
        default:1
    },
        description:{
            type:String,
            required:false
        }, 
         productId:{
            type:String,
            required:false
        },
        price:{
            type:Number,
            required:false
        }
    }
)

const Order = mongose.model('Orders', orderSchema);

module.exports = Order;