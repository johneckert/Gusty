import React from 'react';
import { connect } from 'react-redux';

const Forecast = props => {
  return (
    <div>
      <h3>Forecast</h3>
      <ul>
        {props.forecastObj.list ? (
          props.forecastObj.list.map((dataPt, i) => {
            return (
              <li key={i}>
                <ul>
                  <li>{dataPt.dt.toString()}</li>
                  <li>{dataPt.main.temp}</li>
                  <li>{dataPt.weather[0].icon}</li>
                </ul>
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

export default connect(mapStateToProps)(Forecast);
