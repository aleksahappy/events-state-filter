import React from 'react';
import PropTypes from 'prop-types';
import Project from './Project/Project';
import ProjectModel from '../../../models/ProjectModel';
import './ProjectList.css';

export default function ProjectList({projects}) {
  return (
    <div className="project-list">
      {projects.map((project, i) => {
        return <Project key={`project-${project.category}-${i}`} project={project}/>
      })}
    </div>
  )
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.instanceOf(ProjectModel)).isRequired
};
