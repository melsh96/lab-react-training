import React from 'react';
// ITERATION 6
const Rating = (props) => {
  const { children } = props;
  let res;

  if (children < 0.5) {
    res = '☆☆☆☆☆';
  } else if (children >= 0.5 && children < 1.5) {
    res = '★☆☆☆☆';
  } else if (children >= 1.5 && children < 2.5) {
    res = '★★☆☆☆';
  } else if (children >= 2.5 && children < 3.5) {
    res = '★★★☆☆';
  } else if (children >= 3.5 && children < 4.5) {
    res = '★★★★☆';
  } else if (children >= 4.5) {
    res = '★★★★★';
  }

  return <div>{res}</div>;
};

export default Rating;
