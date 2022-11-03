import { useContext } from "react";
import styles from "./Figure.module.css";
import FiguresContext from "../context/figures-context";

const Figure = (props) => {
  return (
    <div className={styles.figure} id={props.id} onClick={props.onClickHandler}>
      {props.icon}
    </div>
  );
};

export default Figure;
