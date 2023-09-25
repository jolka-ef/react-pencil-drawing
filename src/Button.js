import React from 'react';
import PropTypes from 'prop-types';
import './styles/Button.css'


export const Button = (props) => {
  const {
    onClick,
    name
  } = props;

  return (
    <button
      className="Button"
      onClick={onClick}
    >
      {name}
    </button>
  )
};


Button.propTypes = {
  onClick : PropTypes.func,
  name : PropTypes.string
};
