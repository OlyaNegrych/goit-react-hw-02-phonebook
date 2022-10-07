import PropTypes from 'prop-types';

const Filter = ({ onChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="name" name="find" onChange={onChange}></input>
    </label>
  );
};

 Filter.propTypes = {
   onChange: PropTypes.func.isRequired,
 };

export default Filter;
