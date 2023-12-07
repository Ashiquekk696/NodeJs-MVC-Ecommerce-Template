const mongose = require('mongoose')

const cartSchema = mongose.Schema(
    
    {  
     userId:{
      type:String
     },
      //cartData:
    //  [
       // {
        quantity:{
            type:Number,
            default:1
        },
            productId:{
                type:String
              },
              name:{
                    type: String,
                    required :true
                },
                description:{
                    type:String,
                    required:false
                },
                price:{
                    type:Number,
                    required:false
                }
       // }
   //  ],
 
    },
    { versionKey: false ,  transform: function (doc, ret) {
        delete ret._id;
      },},
    
)

const Cart = mongose.model('cart_model', cartSchema);

module.exports = Cart;