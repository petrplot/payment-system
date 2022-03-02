import React, { useState } from 'react'
import validator from '../utils/validator'

const Form = () => {
    const [cardNumber, setCardNumber] = useState('')
    const [year, setYear] = useState('')
    const [month, setMonth] = useState('')
    const [cvv, setCvv] = useState('')
    const [amount, setAmount] = useState('')

    const payment =  {
            cardNumber,
            year,
            month,
            cvv,
            amount
        }
    
    let objValid = validator(payment)

    const createPayment = async() =>{
        let response = await fetch('http://localhost:5000/api/payment',{
            method:'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }, 
            body:JSON.stringify(payment)
        }) 
        let result = await response.json()
        console.log(result);
        
    }

  return (
      <div className='form'>
          <div>
            <input
              type={'number'}
              value={cardNumber}
              onChange={e=>setCardNumber(e.target.value)}
            />
          </div>
          <div>
            <input 
              type={'number'}
              value={year}
              onChange={e=>setYear(e.target.value)}
            />
          </div>
          <div>
            <input 
              type={'number'}
              value={month}
              onChange={e=>setMonth(e.target.value)}
            />
          </div>
          <div>
            <input 
              type={'number'}
              value={cvv}
              onChange={e=>setCvv(e.target.value)}
            />
          </div>
          <div>
            <input 
              type={'number'}
              value={amount}
              onChange={e=>setAmount(e.target.value)}
            />
          </div>
        <button disabled={!objValid} onClick={createPayment}>оплатить</button>
      </div>
  )
}

export default Form