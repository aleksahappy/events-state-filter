import React from 'react';
import PropTypes from 'prop-types';
import ProjectModel from '../../../../models/ProjectModel';
import './Project.css';

export default function Project({project}) {
  const {img, category} = project;
  return (
    <div className="project">
      <img src={img} alt={`project-${category}`} />
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.instanceOf(ProjectModel)
};
