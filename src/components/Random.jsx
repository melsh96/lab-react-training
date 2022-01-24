import React from 'react';
// ITERATION 3
const Random = (props) => {
    const {min, max} = props;
  return <div>
      <p>Random value between {min} and {max} = {Math.floor(Math.random() * (max - min) + min)}</p>
  </div>;
};

export default Random;
