import React from 'react';

const Hour = props => {
  return (
    <ul className="hour">
      <li>{props.hourObj.hour}</li>
      <li>
        <img src={`./colorIcons/${props.hourObj.icon}.svg`} alt={props.hourObj.description} />
      </li>
      <li>
        <h4>{`${props.hourObj.temp}\u00B0`}</h4>
      </li>
    </ul>
  );
};
export default Hour;
