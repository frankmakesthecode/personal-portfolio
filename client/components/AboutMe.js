import React from 'react';

export const AboutMe = () => {
  return (
    <div id="aboutme-container">
      <div id="main-container">
        <h1 id="about-title">About Me</h1>
        <p className="muted-text">
          First world <span>work ethic.</span> Third world{' '}
          <span>perspective.</span>
        </p>
        <p>
          I'm Francis Yu and I'm a software developer based in Brooklyn, New
          York. I'm also a graduate from Fullstack Academy's coding bootcamp. I
          am proficient with Javascript/React.js, HTML, and CSS.
          <br />
          <br />
          Prior to Fullstack Academy, I gained experience as a Product and
          Account Manager, collaborating with the company's developers to
          delivery simple and effective software solutions to our clients.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
