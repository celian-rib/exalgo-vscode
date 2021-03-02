export enum ExalgoPrimitives {
	Entier,
	Réel,
	Caractère,
	Booléen
}


/**
 * Return the primitives enum in an array of string
 * @return an array of string with all the primitives types
 */
export function getExalgoPrimitivesString(): string[] {
	return toArray(ExalgoPrimitives);
}

/**
 * Convert the enum into a string array
 * @param _enum the enum of primitives types
 * @return an array of string
 */
function toArray(_enum: any) {
	return Object.keys(_enum)
		.filter((value : string | number) => isNaN(Number(value)) === false)
		.map(key => _enum[key]);
}
