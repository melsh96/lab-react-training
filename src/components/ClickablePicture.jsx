import React, { useState } from 'react';

const ClickablePicture = (props) => {
  const { img1, img2 } = props;
  const [clicked, setClicked] = useState(false);

  const handlePicture = () => {
    setClicked(!clicked);
  };

  return (
    <div onClick={handlePicture}>
      <img src={clicked ? img1 : img2} alt={img1} />
    </div>
  );
};

export default ClickablePicture;
