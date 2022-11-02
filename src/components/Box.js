import styles from "./Box.module.css";

const Box = (props) => {
    const id = props.id.x.toString() + ' ' + props.id.y.toString();
  return (
    <div
      key={props.id}
      className={styles.box}
      style={{ backgroundColor: props.backgroundColor }}>
      {props.children}
    </div>
  );
};

export default Box;
