import React from "react";

const FigureContext = React.createContext({
  figures: [],
  lettersCoordinates: [],
  numbersCoordinates: [],
  moveFigure: () => {},
  removeFigure: () => {},
});

export default FigureContext;
