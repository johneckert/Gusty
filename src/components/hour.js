import React from 'react';

const Hour = props => {
  return (
    <ul>
      <li>{props.hourObj.hour}</li>
      <li>
        <img src={`./colorIcons/${props.hourObj.icon}.svg`} alt={props.hourObj.description} />
      </li>
      <li>{`${props.hourObj.temp}\u00B0`}</li>
    </ul>
  );
};
export default Hour;
