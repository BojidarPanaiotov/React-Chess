import FiguresContext from "./figures-context";

const FiguresProvider = (props) => {

  const moveFigureHandler = (figure) => {
  };

  const removeFigureHandler = (id) => {
  };

  const figuresContext = {
    figures: [
      { id: "7 a", icon: "♟" },
      { id: "7 b", icon: "♟" },
      { id: "7 c", icon: "♟" },
      { id: "7 d", icon: "♟" },
      { id: "7 e", icon: "♟" },
      { id: "7 f", icon: "♟" },
      { id: "7 g", icon: "♟" },
      { id: "7 h", icon: "♟" },
      { id: "8 a", icon: "♜" },
      { id: "8 b", icon: "♞" },
      { id: "8 c", icon: "♝" },
      { id: "8 d", icon: "♛" },
      { id: "8 e", icon: "♚" },
      { id: "8 f", icon: "♝" },
      { id: "8 g", icon: "♞" },
      { id: "8 h", icon: "♜" },
      { id: "2 a", icon: "♙" },
      { id: "2 b", icon: "♙" },
      { id: "2 c", icon: "♙" },
      { id: "2 d", icon: "♙" },
      { id: "2 e", icon: "♙" },
      { id: "2 f", icon: "♙" },
      { id: "2 g", icon: "♙" },
      { id: "2 h", icon: "♙" },
      { id: "1 a", icon: "♖" },
      { id: "1 b", icon: "♘" },
      { id: "1 c", icon: "♗" },
      { id: "1 d", icon: "♕" },
      { id: "1 e", icon: "♔" },
      { id: "1 f", icon: "♗" },
      { id: "1 g", icon: "♘" },
      { id: "1 h", icon: "♖" },
    ],
    lettersCoordinates: ["a", "b", "c", "d", "e", "f", "g", "h"],
    numbersCoordinates: ["8", "7", "6", "5", "4", "3", "2", "1"],
    moveFigure: moveFigureHandler,
    removeFigure: removeFigureHandler,
    turn: 'white'
  };

  return (
    <FiguresContext.Provider value={figuresContext}>
      {props.children}
    </FiguresContext.Provider>
  );
};

export default FiguresProvider;
