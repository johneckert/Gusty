import React from 'react';
import { connect } from 'react-redux';

const Forecast = props => {
  return (
    <ul>
      {props.forecastObj.list ? (
        props.forecastObj.list.map((dataPt, i) => <li key={i}>{dataPt.dt}</li>)
      ) : (
        <li>Data Unavailable</li>
      )}
    </ul>
  );
};

const mapStateToProps = state => {
  return { forecastObj: state.forecastObj };
};

export default connect(mapStateToProps)(Forecast);
