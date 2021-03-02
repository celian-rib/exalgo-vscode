export enum ExalgoPrimitives {
	Entier,
	Réel,
	Caractère,
	Booléen
}

export const enumArray = Object.values(ExalgoPrimitives);


// /**
//  * Convert exalgoTypes in a string array
//  * @return an array of string with all the types
//  */
// export function getExalgoTypesString(): string[] {
// 	const result: string[] = [];
// 	ExalgoTypes.forEach(element => {
// 		result.push(element.primitiv);
// 	});
// 	return result;
// }
