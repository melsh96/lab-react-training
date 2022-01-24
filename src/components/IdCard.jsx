import React from 'react';
// ITERATION 1
const IdCard = (props) => {
  const { lastName, firstName, gender, height, birth, picture } = props;
  return (
    <div className='card'>
      <img src={picture} alt="" />
	  <div className='text'>
		<p><strong>Last name: </strong>{lastName} <br />
		<strong>First name: </strong>{firstName} <br />
		<strong>Gender: </strong>{gender}<br />
		<strong>Height: </strong>{height}<br />
		<strong>Birth: </strong>{birth.toString()}</p>
	  </div>
    </div>
  );
};

export default IdCard;
