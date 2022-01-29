import React from 'react';
import { useState } from 'react';

let curColor = '';
const LikeButton = (props) => {
  const [count, setCount] = useState(0);

  const handleclick = () => {
    setCount((prevCount) => prevCount + 1);
    curColor = colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <div className="likes">
      {/* <button onClick={() => setCount(count + 1)}>{count} Likes</button> */}
      <button
        onClick={() => handleclick()}
        style={{ backgroundColor: curColor }}
      >
        {count} {(count === 1) | (count === 0) ? 'Like' : 'Likes'}
      </button>
    </div>
  );
};

export default LikeButton;

const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
