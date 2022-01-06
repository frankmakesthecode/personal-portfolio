import React, { useState } from 'react';
import { AiFillAppstore } from 'react-icons/ai';
import AboutMe from './AboutMe';
import Projects from './Projects';

export const Content = () => {
  const [active, setActive] = useState(true);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div id="content-container">
      <AiFillAppstore
        id={active ? 'active-widget' : 'widget'}
        onClick={handleClick}
      />
      {active ? <Projects /> : <AboutMe />}
    </div>
  );
};

export default Content;
