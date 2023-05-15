import { CellComponent } from "@/components/Cell";
import "@/styles/board.scss";
import { BoardOptions, Size } from "../types/types";

type Props = {
	boardOptions: BoardOptions;
};

// クラス定義してボードに関するフィールドとメソッドをまとめる
export class Board {
	constructor(boardOptions: BoardOptions) {
		if (boardOptions.size.x <= 0 || boardOptions.size.x) {
			throw new Error("Borad size should be more than 0");
		}
		this.size = boardOptions.size;
	}

	size: Size;

	// 初期のオセロボード情報の配列を作成する
	createInitialBoard() {
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

	//  x,y座標から現在のboradの石のtypeを返す
}

export const BoardComponent = (props: Props) => {
	const board = new Board(props.boardOptions);

	const initialBoard = board.createInitialBoard();
	return (
		<>
			<div className="board">
				{initialBoard.map((row, y) => {
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
