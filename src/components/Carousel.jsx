import React from 'react';
import { useState } from 'react';

const Carousel = (props) => {
  const { images } = props;
  const [count, setCount] = useState(0);

  console.log(images);
  console.log(count);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  return (
    <div>
      <button
        onClick={() =>
          count <= 0 ? setCount(images.length - 1) : decrementCount()
        }
      >
        Left
      </button>
      <img src={images[count]} alt={images[count]} />
      <button
        onClick={() =>
          count < images.length - 1 ? incrementCount() : setCount(0)
        }
      >
        Right
      </button>
    </div>
  );
};

export default Carousel;
