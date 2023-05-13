import "./App.css";
import { Board } from "./components/Board";
import { Size } from "./types/board";

function App() {
	// ボードの設定
	// 値はOptionコンポーネントで設定
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
