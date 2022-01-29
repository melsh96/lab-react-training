import React from 'react';
import visa from '../assets/images/visa.png';
import masterCard from '../assets/images/master-card.svg';
// Iteration 5
const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  return (
    <div className='CreditCard' style={{
      backgroundColor: `${bgColor}`, 
      width: 350, 
      height: 200, 
      color: `${color}`,
      borderRadius: 10}}>
        <div className='CreditCardLogo'>
          <img src={type === 'Visa' ? visa : masterCard} alt={type} style={{width: 100,}} />
        </div>
        <div className='CreditCardNumber'>
         <h1>•••• •••• •••• {number.slice(-5, -1)}</h1> 
          <p>Expires {expirationMonth} / {expirationYear}    {bank} <br />{owner}</p>
        </div>
     
    </div>
  )
};

export default CreditCard;
