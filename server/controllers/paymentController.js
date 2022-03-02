const Payment = require('../models/Payment')
const validator = require('../utils/validator')

class PaymentController{

  async create(req, res){

        try {
            const data = req.body
            console.log(data);
            const paymentValid = validator(req.body)
              
            if(paymentValid){
                const date = {
                    year:req.body.year,
                    month:req.body.month
                }
                const payment = await Payment.create({
                    cardNumber:req.body.cardNumber,
                    expirationDate:date,
                    cvv:req.body.cvv,
                    amount:req.body.amount
                })
               const objRes = {
                    id:payment._id,
                    amount:payment.amount
                }
               return res.json(objRes)
            } 
           return res.status(406).json({message:'некорректные данные'})  
        } catch (e) {
            console.log(e);
        }
        
    }

}

module.exports = new PaymentController()