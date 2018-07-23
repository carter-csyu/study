import React from 'react';

const Color = ({color, onClick, activeColor}) => {
  return (
    <div
      className={`color ${activeColor === color && 'active'}`}
      style={{backgroundColor: color}}
      onClick={() => onClick(color)}
    >&nbsp;
    </div>
  );
};

export default Color;