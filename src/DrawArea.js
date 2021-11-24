import React from 'react';
import PropTypes from 'prop-types';
import './styles/DrawArea.css';

export const DrawArea = (props) => {
  const {
    cursor,
    drawings,
    handleDrawing,
    handleLeavingDrawArea,
    handleDrawStart,
    handleTouchStart,
    reference
  } = props;

  return(
    <div className="DrawArea-Container">
      <svg
        className="DrawArea"
        onMouseDown={handleDrawStart}
        onMouseLeave={handleLeavingDrawArea}
        onMouseMove={handleDrawing}
        onTouchStart={handleTouchStart}
        onTouchMove={handleDrawing}
        ref={reference}
        style={cursor}
      >
        {drawings}
      </svg>
    </div>
  )
};


DrawArea.propTypes = {
  cursor : PropTypes.object,
  drawings : PropTypes.array,
  handleDrawing : PropTypes.func,
  handleLeavingDrawArea : PropTypes.func,
  handleDrawStart : PropTypes.func,
  handleTouchStart : PropTypes.func,
  reference : PropTypes.object
};
