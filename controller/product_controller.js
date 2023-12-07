const { verifyToken } = require("../config/verify_token");
const Product = require("../model/product_model")
exports.createProduct=async (req, res) => {
    try {   
    const {name,description,price,image,contactNumber,latitude,longitude} = req.body
    const newProduct = new Product({name,description,price,image,contactNumber,latitude,longitude})
   console.log("new product",newProduct);
    await newProduct.save().then((result) => {
       console.log("ress",result); 
    }).catch((err) => {
        console.log("errr",err); 
    });
    res.status(201).json({ message: 'Item created successfully', data: newProduct}); 
    } catch (error) {
        res.status(500).json({ message: error }); 
    }
  }
  exports.listProducts=async (req, res) => {
    verifyToken(req,res,async()=>{
        try {    

            const myProducts = await Product.find(); 
            console.log("myproducts",myProducts);
           if(!myProducts){

            res.status(401).json({ message: 'Something gone worng'}); 
           }
           else{


            res.status(201).json({ message: 'Products listed successfully', data: myProducts}); 
           }
            } catch (error) {
                console.log(error);
                res.status(500).json({ message: error }); 
            }   
    })

  }