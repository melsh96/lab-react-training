import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [rValue, setRvalue] = useState(0);
  const [gValue, setGvalue] = useState(0);
  const [bValue, setBvalue] = useState(0);

  const handleColor = (color) => {
    if (color === 'R: ') setRvalue(rValue);
    else if (color === 'G: ') setBvalue(gValue);
    else setGvalue(bValue);
  };

  return (
    <div>
      <div style={{ width: 50, heigth: 50, backgroundColor: { rValue } }}></div>
      <SingleColorPicker color="R: " value={rValue} onChange={handleColor} />
      <div style={{ width: 50, heigth: 50, backgroundColor: { gValue } }}></div>
      <SingleColorPicker color="G: " value={gValue} onChange={handleColor} />
      <div style={{ width: 50, heigth: 50, backgroundColor: { bValue } }}></div>
      <SingleColorPicker color="B: " value={bValue} onChange={handleColor} />
      <div
        style={{
          backgroundColor: `rgb(${rValue},${gValue}, ${bValue})`,
          width: 50,
          height: 50,
          marginTop: 20,
        }}
      ></div>
      <p>
        rgb({rValue}, {gValue}, {bValue})
      </p>
    </div>
  );
};

export default RGBColorPicker;
