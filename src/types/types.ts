export type Size = {
	x: number;
	y: number;
};

export type BoardOptions = {
	size: Size;
	playerStonePosition: string;
};

export type Cells = number | null[][];
