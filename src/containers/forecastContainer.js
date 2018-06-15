import React, { Component } from 'react';
import { connect } from 'react-redux';
import Day from '../components/day';
import ScrollButton from '../components/scrollButton';

class ForecastContainer extends Component {
  handleRightClick = () => {
    this.refs.scroller ? (this.refs.scroller.scrollLeft += 200) : null;
  };

  handleLeftClick = () => {
    this.refs.scroller ? (this.refs.scroller.scrollLeft -= 200) : null;
  };

  renderError = () => <p className="error">Forecast Data Unavailable</p>;

  render() {
    return (
      <div className="forecast-panel">
        <ScrollButton direction="arrow-flipped" handleClick={this.handleLeftClick} />
        <h2>5 Day Forecast</h2>
        {this.props.forecastObj.error ? (
          this.renderError()
        ) : (
          <ul ref="scroller">
            {Object.values(this.props.forecastObj).map(dayArr => {
              return (
                <li key={dayArr[0].day}>
                  <Day dayArr={dayArr} />
                </li>
              );
            })}
          </ul>
        )}
        <ScrollButton direction="arrow" handleClick={this.handleRightClick} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { forecastObj: state.forecastObj };
};

export default connect(mapStateToProps)(ForecastContainer);
