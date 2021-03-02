export interface IExalgoPrimitives {
	primitive: string,
}

export const exalgoTypes: IExalgoPrimitives[] = [
	{ primitive: 'entier' },
	{ primitive: 'réel' },
	{ primitive: 'caractère' },
	{ primitive: 'booléen' },
];

/**
 * Convert exalgoTypes in a string array
 * @return an array of string with all the types
 */
export function getExalgoTypesString(): string[] {
	const result: string[] = [];
	exalgoTypes.forEach(element => {
		result.push(element.primitive);
	});
	return result;
}

/**
 * Convert exalgoMethods in a string array
 * @return an array of string with all the methods
 */
export function getExalgoMethodsString(): string[] {
	const result: string[] = [];
	exalgoMethods.forEach(element => {
		result.push(element.name);
	});
	return result;
}

enum EnterParameter {
	E,
	ES,
	S
}

export interface IParameter {
	type: IExalgoPrimitives | string,
	enterType: EnterParameter,
}

export interface IExalgoMethods {
	name: string,
	parameters: IParameter[] | null,
	description: string,
	return: IExalgoPrimitives | null,
}


export const exalgoMethods: IExalgoMethods[] = [
	{
		name: 'écrire',
		parameters: [
			{ type: '', enterType: EnterParameter.E }
		],
		description: 'Affiche dans la console',
		return: null,
	},
	{
		name: 'entierAléatoire',
		parameters: [
			{ type: { primitive: 'entier' }, enterType: EnterParameter.E },
			{ type: '', enterType: EnterParameter.E }
		],
		description: 'Renvoie un entier aléatoire compris entre les premier paramètre (inclu) et le second paramètre',
		return: { primitive: 'entier' },
	},
	{
		name: 'lire',
		parameters: [
			{ type: 'chaîne', enterType: EnterParameter.E }
		],
		description: 'Demande à l\'utilisateur de rentrer une information',
		return: { primitive: 'chaîne' }
	},
];
