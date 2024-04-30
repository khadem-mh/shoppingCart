const mongoose = require('mongoose')

const Schema = mongoose.Schema

const orderSchema = new Schema({
    items: { type: Array }
})

module.exports = mongoose.model('order', orderSchema)