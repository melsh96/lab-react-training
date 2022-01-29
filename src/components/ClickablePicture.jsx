import React, { useState } from 'react';

const ClickablePicture = (props) => {
  const [clicked, setClicked] = useState(true);

  const handlePicture = () => {
    // if (clicked)
  };

  return (
    <div>
      <img src={clicked ? this.props.img : this.props.imgClicked} alt="" />
    </div>
  );
};

export default ClickablePicture;
