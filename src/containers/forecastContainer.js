import React from 'react';
import { connect } from 'react-redux';
import Day from '../components/day';

const ForecastContainer = props => {
  return (
    <div>
      <h3>5 Day Forecast</h3>
      <ul>
        {props.forecastObj ? (
          Object.values(props.forecastObj).map(dayArr => {
            return (
              <li key={dayArr[0].day}>
                <Day dayArr={dayArr} />
              </li>
            );
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

export default connect(mapStateToProps)(ForecastContainer);
