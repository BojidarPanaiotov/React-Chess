import styles from "./Box.module.css";

const Box = (props) => {
  return (
    <div
      onClick={props.onClickHandler}
      id={props.id}
      className={styles.box}
      style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
    </div>
  );
};

export default Box;
