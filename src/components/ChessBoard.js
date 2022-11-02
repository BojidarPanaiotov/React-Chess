import Box from "./Box";
import styles from "./ChessBoard.module.css";

const getChessBoardBoxes = () => {
  const boxes = [];
  let counter = 1;
  let color;
  for (let row = 0; row < 8; row++) {
    boxes.push([]);
    for (let col = 0; col < 8; col++) {
      if (counter % 2 === 0) {
        color = "#FFF";
      } else {
        color = "#51A3A3";
      }
      boxes[row].push(
        <Box
          backgroundColor={color}
          id={{ x: row, y: col }}
          key={row + " " + col}></Box>
      );
      counter++;
    }
    counter++;
  }

  return boxes;
}
const ChessBoard = (props) => {
  const boxes = getChessBoardBoxes();

  return (
    <div className={styles.container}>
      <div className={styles["chess-board"]}>
        {boxes.map((row, index) => (
          <div className={styles.row} key={index}>
            {row.map((box) => box)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
