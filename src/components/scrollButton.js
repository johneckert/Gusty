import React from 'react';

const ScrollButton = props => {
  return (
    <div className={props.direction} onClick={props.handleClick}>
      <img src="./chevron-right.svg" alt=">" />
    </div>
  );
};

export default ScrollButton;
