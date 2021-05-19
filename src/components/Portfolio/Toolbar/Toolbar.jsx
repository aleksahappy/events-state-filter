import React from 'react';
import PropTypes from 'prop-types';
import Filter from './Filter/Filter';
import './Toolbar.css';

export default function Toolbar({filters, selected, onSelectFilter}) {
  return (
    <div className="toolbar">
      {filters.map((filter, i) => {
        return <Filter key={`filter-${i}`} filter={filter} selected={selected} onSelectFilter={onSelectFilter}/>
      })}
    </div>
  )
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
};
