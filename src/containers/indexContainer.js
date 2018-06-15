import React, { Component } from 'react';
import { connect } from 'react-redux';
import CityListItem from '../components/cityListItem';
import Loader from '../components/loader';

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
    return (
      <div className="main">
        {this.props.weatherObjs.length === 5 ? ( //change this number if more cities are added
          this.sortedCities().map(weatherObj => {
            return <CityListItem key={weatherObj.id} weatherObj={weatherObj} />;
          })
        ) : (
          <Loader />
        )}
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
