// const Selectbox = ({ options, classes, handleOnChange }) => {
//   const createOptions = options =>
//     options.map(o => (
//       <option value={o.value} key={o.value}>
//         {o.label}
//       </option>
//     ));
//
//   return (
//     <select onChange={e => handleOnChange(e.target.value)} className={classes}>
//       {createOptions(options)}
//     </select>
//   );
// };
//
// Selectbox.propTypes = {
//   options: PropTypes.array.isRequired,
//   classes: PropTypes.string,
//   handleOnChange: PropTypes.func.isRequired
// };
//
// export default Selectbox;


import React from 'react';
import PropTypes from 'prop-types';

// import './styles/Select.css'

export const Select = (props) => {
  const {
    onChange,
    label,
    name,
    options,
    value
  }
    = props;

  const getOptions = options.map((o) =>
    <option key = {o.value} value = {o.value}>
      {o.label}
    </option>
  )
  return (
    <div className="ToolContainer">
      <label className="ToolLabel" htmlFor={name}>
        {label}
      </label>
      <select className="Tool" id={name} name={name} value={value} onChange={onChange}>
        {getOptions}
      </select>
    </div>
  )
};

Select.propTypes = {
  onChange : PropTypes.func,
  label : PropTypes.string,
  name : PropTypes.string,
  options : PropTypes.array,
  value : PropTypes.string
}
