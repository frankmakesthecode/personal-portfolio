import React from 'react';
import github from '../../public/icons/github.png';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { MdOndemandVideo } from 'react-icons/md';

export const Projects = () => {
  return (
    <div className="content-wrapper">
      <div id="project-container">
        <h2 className="content-title">Projects</h2>
        <div className="project-item">
          <div className="icon-container">
            <a
              href="https://expo.dev/@fresh-by-apollos/fresh-by-apollos"
              target="_blank"
            >
              <AiOutlineDeploymentUnit className="project-icon" />
            </a>
            <a
              href="https://github.com/Fresh-by-Apollos/Fresh-by-Apollo"
              target="_blank"
            >
              <img src={github} className="project-icon" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=mI6g0BOzG1Y&ab_channel=FullstackAcademy"
              target="_blank"
            >
              <MdOndemandVideo className="project-icon" />
            </a>
          </div>
          <div className="project-detail">
            <h4 className="project-title">Fresh: Fridge Management App</h4>
            <p className="project-description">
              Fresh is a personal fridge management app that allows users to
              track expiration dates and macronutrients of food and drinks. In
              addition, the platform monitors allergy and diet conflicts of
              grocery items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
