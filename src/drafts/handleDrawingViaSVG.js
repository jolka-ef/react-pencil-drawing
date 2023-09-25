const handleTouchDrawingViaSVG = (event) => {
    if (isDrawing) {
      const x = event.touches[0].clientX;
      const y = event.touches[0].clientY;
      const xMIN = boundingRect.left;
      const xMAX = boundingRect.right;
      const yMIN = boundingRect.top;
      const yMAX = boundingRect.bottom;
      point.x = x;
      point.y = y;
      const pointSVG = point.matrixTransform(drawArea.current.getScreenCTM().inverse());
      setCurrentDraw(currentDraw += ` ${Math.round(pointSVG.x)} ${Math.round(pointSVG.y)}`);
      setTouchPoints([...touchPoints, [Math.round(pointSVG.x), Math.round(pointSVG.y)]])
      console.log(`X cord: ${Math.round(pointSVG.x)}`)
      console.log(`Y cord: ${Math.round(pointSVG.y)}`)

    }
  }
;
