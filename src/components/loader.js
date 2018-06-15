import React from 'react';

const Loader = props => {
  return (
    <span className="loader">
      <div className="loading-dot one" />
      <div className="loading-dot two" />
      <div className="loading-dot three" />
    </span>
  );
};

export default Loader;
