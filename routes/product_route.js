const express = require('express')
const router = express.Router();
const {createProduct:createProduct,listProducts:listProducts}=require('../controller/product_controller')
router.post("/createProduct",createProduct)
router.get("/listProducts",listProducts)

module.exports = router