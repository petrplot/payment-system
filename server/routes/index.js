const Router = require('express')
const router = new Router()
const paymentRout = require('./paymentRout')

router.use('/payment', paymentRout)

module.exports = router