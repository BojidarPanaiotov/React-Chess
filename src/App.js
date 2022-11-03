import "./App.css";
import ChessBoard from "./components/ChessBoard";
import FiguresProvider from "./context/FiguresProvider";

function App() {
  return (
    <FiguresProvider>
      <ChessBoard></ChessBoard>
    </FiguresProvider>
  );
}

export default App;
