useEffect(() => {
  setBoundingRect({
    xMIN : drawArea.current.getBoundingClientRect().left,
    xMAX : drawArea.current.getBoundingClientRect().right,
    yMIN : drawArea.current.getBoundingClientRect().top,
    yMAX : drawArea.current.getBoundingClientRect().bottom

  });
  // console.log(boundingRect)
}, [drawArea]);
