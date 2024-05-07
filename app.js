const express = require('express');
const app = express()
const dbConnect = require('./config/mongose_config')
const orderRouter = require('./routes/order')
const cartRouter = require('./routes/cart')
const userRouter = require('./routes/user')
const realOtpRouter = require('./routes/normal_otp')
const twilioRouter = require('./routes/twilio_route')
const productRouter = require('./routes/product_route')
const morgan = require('morgan')
require('dotenv').config()
dbConnect()
 

// app.use("/",(req,res)=>{
//     res.send("helllllooo")
// })

app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/order',orderRouter)
app.use('/user',userRouter)
app.use('/twilio-sms',twilioRouter)
app.use('/verify',realOtpRouter)
app.use('/cart',cartRouter)
app.use('/product',productRouter)
app.listen(process.env.PORT,()=>{
    console.log("Server connected");
})