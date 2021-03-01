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
	type: IExalgoType | string,
	enterType: EnterParameter,
}

export interface IExalgoMethods {
	name: string,
	parameters: IParameter[] | null,
	description: string,
	return: IExalgoType | null,
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
			{ type: { primitiv: 'entier' }, enterType: EnterParameter.E },
			{ type: '', enterType: EnterParameter.E }
		],
		description: 'Renvoie un entier aléatoire compris entre les premier paramètre (inclu) et le second paramètre',
		return: { primitiv: 'entier' },
	},
	{
		name: 'lire',
		parameters: [
			{ type: 'chaîne', enterType: EnterParameter.E }
		],
		description: 'Demande à l\'utilisateur de rentrer une information',
		return: { primitiv: 'chaîne' }
	},
];