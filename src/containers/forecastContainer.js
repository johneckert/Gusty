import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from '../components/day';

class ForecastContainer extends Component {
  handleRightClick = () => {
    this.refs.scroller.scrollLeft += 200;
  };

  handleLeftClick = () => {
    this.refs.scroller.scrollLeft -= 200;
  };

  renderError = () => <p className="error">Forecast Data Unavailable</p>;

  render() {
    return (
      <div className="forecast-panel">
        <div className="arrow-flipped" onClick={this.handleLeftClick}>
          <img src="./chevron-right.svg" alt=">" />
        </div>
        <h2>5 Day Forecast</h2>
        {this.props.forecastObj.error ? (
          this.renderError()
        ) : (
          <ul ref="scroller">
            {this.props.forecastObj ? (
              Object.values(this.props.forecastObj).map(dayArr => {
                return (
                  <li key={dayArr[0].day}>
                    <Day dayArr={dayArr} />
                  </li>
                );
              })
            ) : (
              <li>--</li>
            )}
          </ul>
        )}
        <div className="arrow" onClick={this.handleRightClick}>
          <img src="./chevron-right.svg" alt=">" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { forecastObj: state.forecastObj };
};

export default connect(mapStateToProps)(ForecastContainer);
