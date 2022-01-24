import React from 'react';
//  Iteration 4
const BoxColor = (props) => {
  const { r, g, b } = props;
  return (<div
  className="box-color"
  style={{
      backgroundColor: `rgb(${r}, ${g}, ${b})`,
      width: 100,
      height: 100,
  }}>
  </div>);
};

export default BoxColor;
