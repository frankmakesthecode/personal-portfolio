import React from 'react';
import linkedIn from '../../public/icons/linked-in.png';
import github from '../../public/icons/github.png';
import podcast from '../../public/icons/podcast.png';
import gmail from '../../public/icons/gmail.png';

export const Banner = () => {
  return (
    <div id="banner-container">
      <div id="color-overlay"></div>
      <h2 id="main-title">Francis Yu</h2>
      <p>developer, thinker, sports buff</p>
      <div id="account-container">
        <a href="mailto:francisjosephyu@gmail.com">
          <img src={gmail} className="banner-icon" />
        </a>
        <a href="https://www.linkedin.com/in/francisjyu/" target="_blank">
          <img src={linkedIn} className="banner-icon-alt" />
        </a>
        <a
          href="https://open.spotify.com/show/42JS1T0g3vGreeWOd9tgLs?si=4c8e6324d4254745"
          target="_blank"
        >
          <img src={podcast} className="banner-icon" />
        </a>
        <a href="https://github.com/frankmakesthecode" target="_blank">
          <img src={github} className="banner-icon-alt" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
