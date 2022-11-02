import styles from "./Box.module.css";

const Box = (props) => {
  return (
    <div
      className={styles.box}
      style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
    </div>
  );
};

export default Box;
