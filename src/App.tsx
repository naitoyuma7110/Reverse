import "./App.css";
import { Board } from "./components/Board";
import { Size } from "./types/board";

function App() {
	// オセロボードの大きさ設定
	const size: Size = {
		x: 8,
		y: 8,
	};

	return (
		<>
			<Board size={size} />
		</>
	);
}

export default App;
