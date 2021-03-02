export interface IExalgoType {
	primitiv: string,
}

export const exalgoTypes: IExalgoType[] = [
	{ primitiv: 'entier' },
	{ primitiv: 'réel' },
	{ primitiv: 'caractère' },
	{ primitiv: 'booléen' },
];

/**
 * Convert exalgoTypes in a string array
 * @return an array of string with all the types
 */
export function getExalgoTypesString(): string[] {
	const result: string[] = [];
	exalgoTypes.forEach(element => {
		result.push(element.primitiv);
	});
	return result;
}
