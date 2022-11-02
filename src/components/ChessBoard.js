import Box from "./Box";
import Figure from "./Figure";
import styles from "./ChessBoard.module.css";
import constants from "../utils/constants";
import Coordinates from "./Coordinates";
import BoxesList from "./BoxesList";

const getChessBoardBoxes = () => {
  const letterCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numberCoordinates = ["8", "7", "6", "5", "4", "3", "2", "1"];
  const figures = [
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
  ];
  const boxes = [];
  let color;
  const onBoxClickHandler = (e) => {
    console.log(e.target.id);
  };
  for (let row = 0; row < 8; row++) {
    boxes.push([]);
    for (let col = 0; col < 8; col++) {
      color =
        (row + col) % 2 === 0
          ? constants.WHITE_BOX_COLOR
          : constants.BLACK_BOX_COLOR;

      const id = numberCoordinates[row] + " " + letterCoordinates[col];
      const figure = figures.filter((a) => a.id === id);
      let figureIcon = "";
      if (figure.length === 1) {
        figureIcon = figure[0].icon;
      }

      boxes[row].push(
        <Box
          backgroundColor={color}
          key={id}
       >
          <Figure
            icon={figureIcon}
            id={id}
            onClickHandler={onBoxClickHandler}
          />
        </Box>
      );
    }
  }

  return boxes;
};
const ChessBoard = () => {
  const boxes = getChessBoardBoxes();

  return (
    <div className={styles.container}>
      <Coordinates numbers={true} />
      <div className={styles["chess-board"]}>
        <BoxesList boxes={boxes} />
        <Coordinates />
      </div>
    </div>
  );
};

export default ChessBoard;
