import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from '../Filter/Filter.styled';

const Filter = ({value, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <br />
      <FilterInput type="text" value={value} onChange={onChange}></FilterInput>
    </FilterLabel>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
