const express = require('express');
const router = express.Router();
const {createOrder: createItem,listOrders: listItems,deleteOrderById:deleteOrderById} = require('../controller/order_controller')


router.post('/',createItem)
router.get('/getOrders',listItems)
router.delete('/deleteOrder',deleteOrderById)
module.exports =router