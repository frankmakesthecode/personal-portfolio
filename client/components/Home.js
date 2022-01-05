import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div id="home-container">
      <Banner />
    </div>
  );
};

export default connect(null)(Home);
