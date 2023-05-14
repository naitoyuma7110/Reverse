import "@/styles/cell.scss";

type Props = {
	stoneType: number;
};

export class Cell {
	constructor(stoneType: number) {
		this.stoneType = stoneType;
	}

	stoneType: number;
}

export const CellComponent = (props: Props) => {
	const cell = new Cell(props.stoneType);
	return (
		<>
			<div className="cell">
				<span className={`stone-${cell.stoneType}`}>{cell.stoneType}</span>
			</div>
		</>
	);
};
