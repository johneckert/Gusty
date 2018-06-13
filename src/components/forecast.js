import React from 'react';
import { connect } from 'react-redux';

const Forecast = props => {
  console.log('in forecastComponent', props.forecastObj);
  return (
    <div>
      <h3>Forecast</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return { forecastObj: state.forecastObj };
};

export default connect(mapStateToProps)(Forecast);
