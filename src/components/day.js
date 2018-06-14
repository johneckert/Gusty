import React from 'react';
import Hour from './hour.js';

const Day = props => {
  return (
    <div className="day">
      <h4>{props.dayArr[0].day}</h4>
      <div className="hour-container">
        {props.dayArr.map((hourObj, i) => <Hour key={i} hourObj={hourObj} />)}
      </div>
    </div>
  );
};
export default Day;
