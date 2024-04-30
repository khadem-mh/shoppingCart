const express = require('express')
const router = express.Router()
const orderControllers = require('../controllers/order-controllers')

router.post('/', orderControllers.createOrder)

module.exports = router