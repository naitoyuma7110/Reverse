import "./App.css";
import { BoardComponent } from "./components/Board";
// import { Size } from "@/types/board";
import { BoardOptions } from "./types/types";

function App() {
	// オセロボードの初期設定
	const boardOptions: BoardOptions = {
		size: {
			x: 8,
			y: 8,
		},
		playerStonePosition: "center",
	};

	// boardOptionsを子コンポーネントへ渡す
	return (
		<>
			<BoardComponent boardOptions={boardOptions} />
		</>
	);
}

export default App;
