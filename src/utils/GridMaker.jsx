import React from "react";

/**
 * Creates a grid based on the specified parameters
 * @param {Object} params - The grid parameters
 * @param {number} params.height - The height of the grid
 * @param {number} params.width - The width of the grid
 * @param {function} [params.clickedCell] - The callback function for clicking on a cell
 * @returns {JSX.Element} - The JSX element representing the grid
 */
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
