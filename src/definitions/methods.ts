import * as primitives from './primitives';
import * as parameters from './parameters';


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

export interface IExalgoMethods {
	name: string,
	parameters: parameters.IParameter[] | null,
	description: string,
	return: primitives.IExalgoType | null,
}


export const exalgoMethods: IExalgoMethods[] = [
	{
		name: 'écrire',
		parameters: [
			{ type: '', enterType: parameters.EnterParameter.E }
		],
		description: 'Affiche dans la console',
		return: null,
	},
	{
		name: 'entierAléatoire',
		parameters: [
			{ type: { primitiv: 'entier' }, enterType: parameters.EnterParameter.E },
			{ type: '', enterType: parameters.EnterParameter.E }
		],
		description: 'Renvoie un entier aléatoire compris entre les premier paramètre (inclu) et le second paramètre',
		return: { primitiv: 'entier' },
	},
	{
		name: 'lire',
		parameters: [
			{ type: 'chaîne', enterType: parameters.EnterParameter.E }
		],
		description: 'Demande à l\'utilisateur de rentrer une information',
		return: { primitiv: 'chaîne' }
	},
];
