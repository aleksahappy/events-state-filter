import PropTypes from 'prop-types';
import './Filter.css';

export default function Filter({filter, selected, onSelectFilter}) {
  const isActive = selected === filter ? 'active' : '';

  return (
    <button className={`filter ${isActive}`} onClick={() => onSelectFilter(filter)}>{filter}</button>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired
};
