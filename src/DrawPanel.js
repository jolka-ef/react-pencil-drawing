import React from 'react';
import PropTypes from 'prop-types';
import {Button} from "./Button";
import {Select} from "./Select";
import {colorOptions} from "./colorOptions";
import {widthOptions} from "./widthOptions";
import './styles/DrawPanel.css'

export const DrawPanel = (props) => {
  const {
    color,
    handleClearingDraws,
    handleColorChange,
    handleWidthChange,
    width
  } = props;


  return(
    <div className= "DrawPanel">
      <Button
        classname="Button"
        name="Erase"
        onClick={handleClearingDraws}
      />
      <div className="DrawPanel-tools">
        <Select
          className="Select"
          label="Color"
          onChange={handleColorChange}
          options={colorOptions}
          value= {color}
        />
        <Select
          className="Select"
          label="Width"
          onChange={handleWidthChange}
          options={widthOptions}
          value= {width}
        />
      </div>
    </div>
  )

};


DrawPanel.propTypes = {
  color : PropTypes.string,
  handleClearingDraws : PropTypes.func,
  handleColorChange : PropTypes.func,
  handleWidthChange : PropTypes.func,
  width : PropTypes.string,
};
