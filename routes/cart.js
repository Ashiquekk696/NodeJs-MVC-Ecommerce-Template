const express = require('express');
const router = express.Router();
const {addToCart,listCart} = require('../controller/cart_controller')


router.post('/addToCart',addToCart)
router.get('/listCart',listCart)
//router.get('/getMyCart',getMyCart)
module.exports =router
