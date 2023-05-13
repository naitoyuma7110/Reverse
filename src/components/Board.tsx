import { Size } from "../types/board";

type Props = {
	size: Size;
};

// const createBoard = (size)={
//
// }

export const Board = (props: Props) => {
	// const board = createBoard(props.size);
	const board = [
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
	];

	return (
		<>
			<p>
				x:{props.size.x},y:{props.size.y}
			</p>
			<div>
				{board.map((row) => {
					return (
						<div>
							{row.map((num) => {
								return <span className="border">{num}</span>;
							})}
						</div>
					);
				})}
			</div>
		</>
	);
};
