import {inRange} from "./inRange";

onst handleTouchDrawingWithElementFromPoint = (event) => {
  const x = event.touches[0].clientX;
  const y = event.touches[0].clientY;
  const currentElement = document.elementFromPoint(x, y);

  console.log(currentElement)
  if (currentElement) {

    const drawContent = currentElement.closest('.DrawContent');

    if (isDrawing) {

      if (drawContent && !touchLeave) {


        console.log('#1');
        point.x = x;
        point.y = y;
        const pointSVG = point.matrixTransform(drawArea.current.getScreenCTM().inverse());
        setCurrentDraw(currentDraw += ` ${Math.round(pointSVG.x)} ${Math.round(pointSVG.y)}`)
      }

      if ((!drawContent && !touchLeave) || (!currentElement && !touchLeave)) {
        console.log('#2');
        setIsTouchLeaving(true);
        setDraws([...draws, {color, width, currentDraw}]);
        setCurrentDraw('');
      }

      if (!drawContent && touchLeave) {
        console.log("#3")
        return
      }

      if (drawContent && touchLeave) {
        console.log('#4')
        setIsTouchLeaving(false);
      }
    }
  }
};

const handleTouchDrawing = (event) => {
  const x = event.touches[0].clientX;
  const y = event.touches[0].clientY;
  const xMin = boundingRect.left;
  const xMax = boundingRect.right;
  const yMin = boundingRect.top;
  const yMax = boundingRect.bottom;

  if (isDrawing) {
    const isDrawArea = inRange(x, xMin, xMax) && inRange(y, yMin, yMax);
    if (isDrawArea && !touchLeave) {
      console.log('#1');
      point.x = x;
      point.y = y;
      const pointSVG = point.matrixTransform(drawArea.current.getScreenCTM().inverse());
      setCurrentDraw(currentDraw += ` ${Math.round(pointSVG.x)} ${Math.round(pointSVG.y)}`)
    }

    if (!isDrawArea && !touchLeave) {
      console.log('#2');
      setIsTouchLeaving(true);
      setDraws([...draws, {color, width, currentDraw}]);
      setCurrentDraw('');
    }

    if (!isDrawArea && touchLeave) {
      console.log("#3")
      return
    }

    if (isDrawArea && touchLeave) {
      console.log('#4')
      setIsTouchLeaving(false);
    }

  }
};





// console.log(document.elementFromPoint(x,y).classList.contains('DrawArea')) {
// console.log(drawArea)
// if (isDrawing && document.elementFromPoint(x,y) == drawArea) {
//   const x = event.touches[0].clientX;
//   const y = event.touches[0].clientY;
//   const xMin = boundingRect.left;
//   const xMax = boundingRect.right;
//   const yMin = boundingRect.top;
//   const yMax = boundingRect.bottom;
//   console.log(xMin, xMax, yMin, yMax)
//   console.log(x,y)
//
//  if (inRange(x, xMin, xMax) && inRange(y, yMin, yMax)) {
// point.x = x;
// point.y = y;
// const pointSVG = point.matrixTransform(drawArea.current.getScreenCTM().inverse());
// setCurrentDraw(currentDraw += ` ${Math.round(pointSVG.x)} ${Math.round(pointSVG.y)}`)
//     }
//   }
// } else {
//   // przestawic dla null touchLEAVE
//
// }
//   } else {
// setIsDrawing(false);
// setDraws([...draws, {color, width, currentDraw}]);
// setCurrentDraw('');
//   }
// }
// }

// event.preventDefault();
// const point = drawArea.current.createSVGPoint();
// const drawAreaBounding = drawArea.current.getBoundingClientRect();
// const xMin = drawAreaBounding.left;
// const xMax = drawAreaBounding.right;
// const yMin = drawAreaBounding.top;
// const yMax = drawAreaBounding.bottom;
// const x = event.touches[0].clientX ;
// const y = event.touches[0].clientY;
// const touches = event.targetTouches;
// console.log(touches)
//   if (xMin <= x &&x <= xMax && yMin <= y && y <= yMax) {
//     point.x = x;
//     point.y = y;
//     const pointSVG = point.matrixTransform(drawArea.current.getScreenCTM().inverse());
//     setCurrentDraw(currentDraw += ` ${Math.round(pointSVG.x)} ${Math.round(pointSVG.y)}`);
//   } else {
//     // console.log('out of area')
//     setIsDrawing(false);
//     setDraws([...draws, {color, width, currentDraw}]);
//     setCurrentDraw('');
//   }
//   }
// };
