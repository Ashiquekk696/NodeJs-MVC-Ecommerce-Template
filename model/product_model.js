const mongose = require('mongoose')

const productSchema = mongose.Schema(
    
    {   
       // _id : mongose.Schema.Types.Decimal128,
       
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
        },
        image:{
            type: String,
            required :true
        },
        contactNumber:{
            type:String,
            required:false
        },
        latitude:{
         
        }, 
         longitude:{
        
           
        }
    }
)

const Product = mongose.model('product', productSchema);

module.exports = Product;