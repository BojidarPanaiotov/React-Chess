import Box from "./Box";
import Figure from "./Figure";
import styles from "./ChessBoard.module.css";
import constants from "../utils/constants";
import Coordinates from "./Coordinates";
import BoxesList from "./BoxesList";
import FiguresContext from "../context/figures-context";
import { useContext } from "react";

const getChessBoardBoxes = (figuresCtx) => {
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

      const id =
        figuresCtx.numbersCoordinates[row] +
        " " +
        figuresCtx.lettersCoordinates[col];
      const figure = figuresCtx.figures.filter((a) => a.id === id);
      let figureIcon = "";
      if (figure.length === 1) {
        figureIcon = figure[0].icon;
      }

      boxes[row].push(
        <Box backgroundColor={color} key={id}>
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
  const figuresCtx = useContext(FiguresContext);
  const boxes = getChessBoardBoxes(figuresCtx);

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
