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

    let cardInput 
    cardNumber.length !== 16 && cardNumber.length !== 0 ?  cardInput = 'red' : cardInput = 'green';
    let yearInput 
    year.length !== 4 && year.length !== 0 ? yearInput = 'red': yearInput = 'green';
    let monthInput
    month.length !== 2 && month.length !== 0 ? monthInput = 'red': monthInput = 'green';
    let cvvInput
    cvv.length !== 3 && cvv.length !== 0 ? cvvInput = 'red': cvvInput = 'green';


  return (
      <div className='form'>
          <div>
            <p>введите номер карты</p>
            <p> {isFinite(cardNumber)? '' : 'только цифры' } </p>
            <input
              className={cardInput}
              value={cardNumber}
              onChange={e=>setCardNumber(e.target.value)}
            />
          </div>
          <div>
            </div>
          <div>
            <p>введите год и месяц</p>
            <p> {isFinite(year) && isFinite(month)? '' : 'только цифры' } </p>
            <input
              className={yearInput}
              placeholder='0000'             
              value={year}
              onChange={e=>setYear(e.target.value)}
            />
          </div>
          <div>
            <input 
              className={monthInput}
              placeholder='00'             
              value={month}
              onChange={e=>setMonth(e.target.value)}
            />
          </div>
          <div>
          <p>введите cvv код</p>
          <p> {isFinite(cvv)? '' : 'только цифры' } </p>
            <input
              className={cvvInput}             
              value={cvv}
              onChange={e=>setCvv(e.target.value)}
            />
          </div>
          <div>
            <p>введите сумму</p>
            <p> {!isNaN(amount)? '' : 'только цифры' } </p>
            <input             
              value={amount}
              onChange={e=>setAmount(e.target.value)}
            />
          </div>
        <button disabled={!objValid} onClick={createPayment}>оплатить</button>
      </div>
  )
}

export default Form