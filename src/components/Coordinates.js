import styles from "./Coordinates.module.css";

const Coordinates = (props) => {
  const symbols = props.numbers
    ? ["1", "2", "3", "4", "5", "6", "7", "8"]
    : ["a", "b", "c", "d", "e", "f", "g", "h"];

  const classes = props.numbers ? styles.numbers : styles.letters;

  return (
    <div className={classes}>
      {symbols.map((symbol, index) => (
        <div key={index}>{symbol}</div>
      ))}
    </div>
  );
};

export default Coordinates;
