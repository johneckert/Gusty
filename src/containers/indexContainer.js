import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListItem from '../components/cityListItem';

class IndexContainer extends Component {
  sortedCities = () => {
    const sorted = this.props.weatherObjs.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    return sorted;
  };

  render() {
    return this.props.weatherObjs.length === 5 ? ( //change this number if more cities are added
      <div className="main">
        {this.sortedCities().map(weatherObj => {
          return <CityListItem key={weatherObj.id} weatherObj={weatherObj} />;
        })}
      </div>
    ) : (
      <div className="main">
        <h2>LOADING...</h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    weatherObjs: state.weatherObjs
  };
};

export default connect(mapStateToProps)(IndexContainer);
