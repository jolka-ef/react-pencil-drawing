import React from 'react';
import PropTypes from 'prop-types';
import './styles/Select.css'


export const Select = (props) => {
  const {
    onChange,
    label,
    name,
    options,
    value
  } = props;

  const getOptions = options => options.map((o) =>
    <option key = {o.value} value = {o.value}>
      {o.label || o.value}
    </option>
  );
  return (
    <div className="Select-container">

      <label
        className="Select-label"
        htmlFor={name}
      >
        {label}
      </label>

      <select
        className="Select"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        {getOptions(options)}
      </select>

    </div>
  )
};


Select.propTypes = {
  handleSelected : PropTypes.func,
  label : PropTypes.string,
  name : PropTypes.string,
  options : PropTypes.array,
  value : PropTypes.string
};
