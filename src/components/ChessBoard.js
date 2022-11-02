import Box from "./Box";
import styles from "./ChessBoard.module.css";
import constants from "../utils/constants";
import Coordinates from "./Coordinates";

const getChessBoardBoxes = () => {
  const letterCoordinates = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const numberCoordinates = ["8", "7", "6", "5", "4", "3", "2", "1"];
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
      boxes[row].push(
        <Box
          backgroundColor={color}
          id={id}
          key={id}
          onClickHandler={onBoxClickHandler}></Box>
      );
    }
  }

  return boxes;
};
const ChessBoard = (props) => {
  const boxes = getChessBoardBoxes();

  return (
    <div className={styles.container}>
      <Coordinates numbers={true} />
      <div className={styles["chess-board"]}>
        {boxes.map((row, index) => (
          <div className={styles.row} key={index}>
            {row.map((box) => box)}
          </div>
        ))}
        <Coordinates />
      </div>
    </div>
  );
};

export default ChessBoard;
