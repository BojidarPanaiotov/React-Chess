import Box from "./Box";
import styles from "./ChessBoard.module.css";

const ChessBoard = (props) => {
  const boxes = [];
  let counter = 1;
  let color;
  for (let row = 0; row < 8; row++) {
    boxes.push([]);
    for (let col = 0; col < 8; col++) {
      if(counter % 2 === 0) {
        color = '#FFF';
      } else {
        color = "#51A3A3";
      }
      boxes[row].push(<Box backgroundColor={color} id={{x:row,y:col}}></Box>);
      counter++;
    }
      counter++;
  }
  return (
    <div className={styles.container}>
      <div className={styles["chess-board"]}>
        {boxes.map((row) => (
          <div className={styles.row}>{row.map((box) => box)}</div>
        ))}
      </div>
    </div>
  );
};

export default ChessBoard;
