import React from 'react';
import { connect } from 'react-redux';

const Forecast = props => {
  const createTime = hourlyObj => {
    return (
      <ul>
        <li>{hourlyObj.hour}</li>
        <li>
          <img src={`./colorIcons/${hourlyObj.icon}.svg`} alt={hourlyObj.description} />
        </li>
        <li>{`${hourlyObj.temp}\u00B0`}</li>
      </ul>
    );
  };

  const createDay = dayArr => {
    return (
      <div>
        <h4>{dayArr[0].day}</h4>
        <ul>
          {dayArr.map((hourlyObj, i) => {
            return <li key={i}>{createTime(hourlyObj)}</li>;
          })}
        </ul>
      </div>
    );
  };
  return (
    <div>
      <h3>5 Day Forecast</h3>
      <ul>
        {props.forecastObj ? (
          Object.values(props.forecastObj).map(date => {
            return <li key={date[0].day}>{createDay(date)}</li>;
          })
        ) : (
          <li>Data Unavailable</li>
        )}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return { forecastObj: state.forecastObj };
};

export default connect(mapStateToProps)(Forecast);
