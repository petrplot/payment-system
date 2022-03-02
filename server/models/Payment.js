const mongoose = require('mongoose')
const Schema = mongoose.Schema

const paymentSchema = new Schema({
    cardNumber:Number,
    expirationDate:{year:Number, month:Number},
    cvv:Number,
    amount:Number

})

const Payment = new mongoose.model('Payment', paymentSchema)

module.exports = Payment