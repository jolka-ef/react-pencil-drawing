import React from 'react';
import PropTypes from 'prop-types';


export const Path = (props) => {
  const {
    color,
    path,
    width
  } = props;

  return(
  <path
    d={path && `M ${path}`}
    strokeWidth={width}
    stroke={color}
    fill='none'
  />
  )
};


Path.propTypes = {
  color : PropTypes.string,
  path : PropTypes.string,
  width : PropTypes.string
};
