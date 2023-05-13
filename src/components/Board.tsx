import { Size } from "@/types/board";
import { Cell } from "@/components/Cell";
import "@/styles/board.css";

type Props = {
	size: Size;
};

export type Board = number[][];

// 初期のオセロボード配列を作成
const createBoard = (size: Size): Board => {
	const board: number[][] = [];

	for (let y = 0; y < size.y; y++) {
		const rowArray = [];
		for (let x = 0; x < size.x; x++) {
			rowArray.push(0);
		}
		board.push(rowArray);
	}

	return board;
};

//
// x,y座標に応じて石の色を決める(今回は中心4つに交互配置)
// const isCenterCell = (x: number, y: number) => {
// 	const xHalf = x / 2;
//   const yHalf = y / 2;

// };

export const Board = (props: Props) => {
	const board = createBoard(props.size);
	return (
		<>
			<div className="board">
				{board.map((row) => {
					return (
						<div>
							{row.map((cellType) => {
								return <Cell cellType={cellType} />;
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};
