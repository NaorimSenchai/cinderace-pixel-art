import React from "react";

const GridMaker = (params) => {
  let tmp = [];

  for (let i = 0; i < params.height; i++) {
    let row = [];
    for (let j = 0; j < params.width; j++) {
      row.push(
        <div key={`${i + 1}:${j + 1}`} className="col" onClick={params?.clickedCell}></div>
      );
    }
    tmp.push(
      <div key={i + 1} className="row">
        {row}
      </div>
    );
  }

  return <div className="grid">{tmp}</div>;
};

export default GridMaker;
