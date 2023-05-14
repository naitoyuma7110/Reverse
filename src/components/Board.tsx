import { CellComponent } from "@/components/Cell";
import "@/styles/board.scss";
import { BoardOptions } from "../types/board";

type Props = {
	boardOptions: BoardOptions;
};

// クラス定義してボードに関するフィールドとメソッドをまとめる
export class Board {
	constructor(boardOptions: BoardOptions) {
		this.size = boardOptions.size;
	}
	size: {
		x: number;
		y: number;
	};

	// 初期のオセロボード情報の配列を作成する
	createBoard() {
		const board: number[][] = [];

		for (let y = 0; y < this.size.y; y++) {
			const rowArray = [];
			for (let x = 0; x < this.size.x; x++) {
				rowArray.push(this.setStoneByXY(x, y));
			}
			board.push(rowArray);
		}
		return board;
	}

	// x,y座標から初期のオセロボードの石を決定する(中心に設定)
	setStoneByXY = (x: number, y: number) => {
		const xHalf = this.size.x / 2;
		const yHalf = this.size.y / 2;

		if ((x == xHalf - 1 && y == yHalf - 1) || (x == xHalf && y == yHalf))
			return 1;
		if ((x == xHalf && y == yHalf - 1) || (x == xHalf - 1 && y == yHalf))
			return 2;
		return 0;
	};
}

export const BoardComponent = (props: Props) => {
	const board = new Board(props.boardOptions);

	const bordCells = board.createBoard();
	return (
		<>
			<div className="board">
				{bordCells.map((row, y) => {
					return (
						<div className="bord-row" key={y}>
							{y + 1}
							{row.map((stoneType) => {
								return (
									<span>
										<CellComponent stoneType={stoneType} />
									</span>
								);
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};
