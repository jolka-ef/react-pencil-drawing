import React, {useEffect, useState, useRef} from 'react';
import {DrawArea} from "./DrawArea"
import {DrawPanel} from "./DrawPanel";
import {createDrawings} from "./createDrawings";
import {getCursor} from "./cursor";


export function App() {
  const [color, setColor] = useState('#000000');
  const [path, setPath] = useState('');
  const [draws, setDraws] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [width, setWidth] = useState('8');
  const drawArea = useRef();


  useEffect(() => {
    if (isDrawing) {
      document.addEventListener("mouseup", handleDrawEnd);
      document.addEventListener("touchend", handleDrawEnd);

      return () => {
        document.removeEventListener("mouseup", handleDrawEnd);
        document.removeEventListener("touchend", handleDrawEnd);
      };
    }
  });

  const handleDrawStart = () =>
    setIsDrawing(true);

  const handleTouchStart = (event) => {
    handleDrawStart();
    event.preventDefault()
  };

  const handleDrawing = (event) => {
    if (isDrawing) {
      const point = drawArea.current.createSVGPoint();

      const x = typeof event.clientX === 'undefined' ?
        event.touches[0].clientX : event.clientX;
      const y = typeof event.clientY === 'undefined' ?
        event.touches[0].clientY : event.clientY;

      point.x = x;
      point.y = y;
      const pointSVG = point.matrixTransform(drawArea.current.getScreenCTM().inverse());
      setPath(path + ` ${Math.round(pointSVG.x)} ${Math.round(pointSVG.y)}`);
    }
  };

  const handleLeavingDrawArea = () => {
    if (isDrawing) {
      setDraws(draws => [...draws, {color, width, path}]);
      setPath('');
    }
  };

  const handleDrawEnd = () => {
    setIsDrawing(false);
    setDraws(draws => [...draws, {color, width, path}]);
    setPath('');
  };

  const handleClearingDraws = () =>
    setDraws([]);

  const handleColorChange = (event) =>
    setColor(event.target.value);

  const handleWidthChange = (event) =>
    setWidth(event.target.value);

  const cursor = getCursor(color, width);

  const drawings = createDrawings([...draws, {color,width, path}]);

  return(
    <main>
      <DrawPanel
        color={color}
        handleClearingDraws = {handleClearingDraws}
        handleColorChange = {handleColorChange}
        handleWidthChange = {handleWidthChange}
        width={width}
      />
      <DrawArea
        handleDrawStart={handleDrawStart}
        handleDrawing={handleDrawing}
        handleLeavingDrawArea={handleLeavingDrawArea}
        handleTouchStart={handleTouchStart}
        reference={drawArea}
        cursor={cursor}
        drawings={drawings}
      />
    </main>
  )
}
