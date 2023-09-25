
function filterPoints(points, limits) {
  const filteredPaths = [];


  let {xMIN, xMAX, yMIN,yMAX } = limits;
  console.log('xMin: ' + xMIN)
  console.log(`xMax ${yMAX}`)
  const leftCorner = getSVGPoint(xMIN, yMIN);
  const rightCorner = getSVGPoint(xMAX, yMAX);

  xMIN = leftCorner.x;
  xMAX = rightCorner.x;
  yMIN = leftCorner.y;
  yMAX = rightCorner.y

  const xInRange = (nr, from = xMIN, to = xMAX) => (nr-from)*(nr-to) <= 0;
  const yInRange = (nr, from = yMIN, to = yMAX) => (nr-from)*(nr-to) <= 0;
  extractPoints(points);

  function extractPoints(points) {
    const len = points.length;
    for (let index = 1; index < len; index++ ) {
      // console.log(`extract Points loop : ${index}`)
      // console.log(len);
      // console.log(`x : ${points[index][0]}`);
      // console.log(`y : ${ points[index][1]}`)
      if (!(xInRange(points[index][0]) && yInRange(points[index][1]))) {
        filteredPaths.push(points.slice(0, index+1));
        removePoints(points.slice(index));
        return;
      }
    }

    filteredPaths.push(points);
  }

  function removePoints(points) {
    const len = points.length;
    for (let index = 1; index < len; index++ ) {
      console.log(`remove Points loop : ${index}`)
      console.log(len);
      console.log(`x : ${xMIN < points[index][0] < xMAX}`);
      console.log(`y : ${yMIN < points[index][1] < yMAX}`)
      console.log(` condition : ${xInRange(points[index][0]) && yInRange(points[index][1])}`)
      if (xInRange(points[index][0]) && yInRange(points[index][1])) {
        extractPoints(points.slice(index-1));
        return;
      };
    }

  }
  return filteredPaths;
}
