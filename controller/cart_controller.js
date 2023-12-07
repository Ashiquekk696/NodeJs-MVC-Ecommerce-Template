const { verifyToken } = require("../config/verify_token");
const Cart = require("../model/cart_model");
//const Order = require("../model/order");
const Product = require("../model/product_model");


exports.addToCart = async (req, res) => {
  verifyToken(req, res, async () => {
    try {
      var id = await req.body.product_id;
      var userId = await req.userId;
      console.log("uuuu", userId);
      
      const product = await Product.findOne({ _id: id })
      console.log("pro", id, product);
      if (!product) {
        return res.status(404).json({
          status: false,
          message: 'No product found'
        })
      }
      const userCart = await Cart.findOne({ userId: userId, productId: id });
      if (userCart) {
        await userCart.quantity++;
        await userCart.save();
        await res.status(201).json({ message: "added to cart succesfully", data: userCart })
      }
      else {
        console.log("usercart", userCart);
        const item = Cart({
          userId: userId,
          productId: id,
          name: product.name,
          description: product.description,
          price: product.price
        })
        await item.save();

        await res.status(201).json({ message: "added to cart succesfully", data: item })

      }

    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: false,
        message: 'No item found for this idddd'
      })
    }
  });

}



exports.listCart = async (req, res) => {
  try {
    verifyToken(req, res, async () => {
      var userId = await req.userId 
      const cartItems = await Cart.find({ userId: userId });
      console.log("cartItems", cartItems);
      if (cartItems == null) {

        res.status(401).json({ "msg": "Something gone wronnng" });
      }
      else res.status(201).json(cartItems);
    })
  } catch (error) {
    res.status(501).json({ msg: error });
    console.log("eeeerrrrrr", error);
  }
}

// exports.getMyCart = async (req,res) => {
//   try {
//     verifyToken (req,res,async()=>{
//       const id = await req.body.id
//       const myCart = await Cart.find({id})
//       if(myCart){
//         res.status(201).json({"msg":"Your cart is here","data":myCart})
//       }
//       else{
//         console.log("hhhh",myCart);
//       }
//     })
//   } catch (error) {
//     console.log("error",error);
//   }
// }