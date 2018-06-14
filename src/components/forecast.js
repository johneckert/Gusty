import React from 'react';
import { connect } from 'react-redux';

const Forecast = props => {
  return (
    <div>
      <h3>Forecast</h3>
      <ul>
        {props.forecastObj.list ? (
          props.forecastObj.list.map((dataPt, i) => {
            console.log(i, dataPt);
            const date = new Date(dataPt.dt_txt);
            return (
              <li key={i}>
                <ul>
                  <li>{date.getHours()}</li>
                  <li>{`${dataPt.main.temp}\u00B0`}</li>
                  <li>
                    <img src={`./colorIcons/${dataPt.icon}.svg`} alt={dataPt.description} />
                  </li>
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
