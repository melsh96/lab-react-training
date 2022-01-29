import React from 'react';
import { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';
import EmptyDice from '../assets/images/dice-empty.png';

const dices = [dice1, dice2, dice3, dice4, dice5, dice6];

const Dice = () => {
  const [dice, setDice] = useState(EmptyDice);

  const randomDice = () => {
    const random = dices[Math.floor(Math.random() * dices.length)];
    setDice(random);
  };

  const handleDice = () => {
    setDice(EmptyDice);
    setTimeout(randomDice, 1000);
  };

  return (
    <div onClick={() => handleDice()}>
      <img src={dice} alt={dice} style={{ width: '200px' }}></img>
    </div>
  );
};

export default Dice;
