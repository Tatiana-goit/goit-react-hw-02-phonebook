import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <>
      Фильтр по имени{' '}
      <input type="text" value={value} onChange={onChange}></input>
    </>
  );
}


Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Filter;
