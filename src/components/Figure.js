import styles from "./Figure.module.css";

const Figure = (props) => {
  return (
    <div className={styles.figure} id={props.id} onClick={props.onClickHandler}>
      {props.icon}
    </div>
  );
};

export default Figure;
