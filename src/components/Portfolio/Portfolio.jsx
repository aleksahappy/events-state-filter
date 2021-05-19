import React, { useState } from 'react';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList/ProjectList';
import ProjectModel from '../../models/ProjectModel';
import PropTypes from 'prop-types';

export default function Portfolio({items, filters}) {
  const [state, setState] = useState({
    selected: 'All',
    projects: items
  });

  const onSelectFilter = filter => {
    setState({
      selected: filter,
      projects: filter === 'All' ? items : items.filter(el => el.category === filter)
    });
  };

  return (
    <div>
      <Toolbar filters={filters} selected={state.selected} onSelectFilter={onSelectFilter} />
      <ProjectList projects={state.projects} />
    </div>
  )
}

Portfolio.propTypes = {
  items: PropTypes.arrayOf(PropTypes.instanceOf(ProjectModel)).isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired
};
