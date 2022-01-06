import React from 'react';
import { connect } from 'react-redux';
import Banner from './Banner';
import Content from './Content';

/**
 * COMPONENT
 */
export const Home = () => {
  return (
    <div id="home-container">
      <Banner />
      <Content />
    </div>
  );
};

export default connect(null)(Home);
