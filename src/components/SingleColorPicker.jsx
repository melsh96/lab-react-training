import React from 'react';

const SingleColorPicker = (props) => {
  const { color, value, onChange } = props;

  const handleChange = (e) => {
    onChange(color, e.target.value);
  };

  return (
    <div>
      <label htmlFor="color">{color}</label>
      <input type="number" value={value} onChange={handleChange} />
    </div>
  );
};

export default SingleColorPicker;
