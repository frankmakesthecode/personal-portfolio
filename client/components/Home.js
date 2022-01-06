import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import AboutMe from './AboutMe';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div id="home-container">
      <Banner />
      <AboutMe />
    </div>
  );
};

export default connect(null)(Home);
