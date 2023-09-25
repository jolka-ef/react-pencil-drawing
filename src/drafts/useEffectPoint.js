useEffect(() => {
  // point = drawArea.current.createSVGPoint()
  setSvgPoint(drawArea.current.createSVGPoint());
  // console.log(point)
}, [drawArea]);

function getSVGPoint(x, y) {
  const tmpPoint = point;
  tmpPoint.x = x;
  tmpPoint.y = y;

  // console.log(point.x)
  // console.log(tmpPoint.x)

  return SVGPoint = tmpPoint.matrixTransform(drawArea.current.getScreenCTM().inverse());
}
