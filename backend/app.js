const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const orderRoutes = require('./routes/order-routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api', orderRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/orders')
    .then(() => {
        app.listen(3003)
    })
    .catch(err => {
        console.log(err);
    })