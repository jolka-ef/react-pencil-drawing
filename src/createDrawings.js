import {Path} from "./Path";
import React from "react";

export const createDrawings = (draws) => {
  const filterDraws = draws.filter((draw) => draw.path.length > 0);
    return (
      filterDraws.map((draw, index) =>
        <Path
          color={draw.color}
          key={index*index}
          path={draw.path}
          width={draw.width}
        />
        )
    )
}

