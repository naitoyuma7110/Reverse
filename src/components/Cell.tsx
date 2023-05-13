import "@/styles/cell.css";

type Props = {
	cellType: number;
};

export const Cell = (props: Props) => {
	return (
		<>
			<span className="cell">{props.cellType}</span>
		</>
	);
};
