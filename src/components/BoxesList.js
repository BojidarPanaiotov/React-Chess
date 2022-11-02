const BoxesList = (props) => {
    const boxes = props.boxes.map((row, index) => (
      <div style={{display: 'flex'}} key={index}>
        {row.map((box) => box)}
      </div>
    ));

    return <>{boxes}</>;
}

export default BoxesList;