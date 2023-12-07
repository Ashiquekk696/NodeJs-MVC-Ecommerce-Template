const { verifyToken } = require("../config/verify_token");
const Order = require("../model/order");
 
const Product = require("../model/product_model");


exports.createOrder=async (req, res) => {
  verifyToken(req,res, async()=> {
    try {   
      const userId = await req.userId;
      const {productId} = req.body
      const product = await Product.findOne({ _id: productId })
      // console.log("pro", id, product);
      if (!product) {
        return res.status(404).json({
          status: false,
          message: 'No product found'
        })
      }
      const userOrder= await Order.findOne({ userId: userId, productId: productId });
      if (userOrder) {
      
        console.log("ash1"); 
        await userOrder.quantity++;
        await userOrder.save();
        await res.status(201).json({ message: "Ordered succesfully", data: userOrder })
      }
   else{

    console.log("ash2"); 
    const newOrder = new Order ({
      userId:userId,
      productId:product._id,
      name:product.name,
      price:product.price,
      description:product.description
    })
    await newOrder.save();

  res.status(201).json({ message: 'Order created successfully', item: newOrder }); 
   }
      } catch (error) {
        console.log(error); 
      }
  })
 
  }

  exports.listOrders=async (req, res) => {
    try {   
      verifyToken(req,res,async()=>{
        const items = await Order.find();
if(items==null||items.length==0){
  console.log("eeeerrrrrr");
  res.status(401).json({"msg":"No data"}); 
}
    else {res.status(201).json(items); }
      })} catch (error) {
      res.status(501).json({msg:"Something gone wrong"}); 
        console.log("eeeerrrrrr");
    }
  }
 
  exports.deleteOrderById =async (req,res)=> {
  try {
    const id =await req.body.id;
    verifyToken(req,res,async()=>{
      const deletedDocument = await Order.findOneAndDelete({_id:id});
   if(deletedDocument){
    console.log(deletedDocument);
    res.status(201).json({"message":"succefully deleted"})
   }
   else{
    res.status(401).json({"message":"Item not found"})
   }
    })
  } catch (error) {
    console.log(error);
  }
 }