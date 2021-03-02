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
	return: primitives.ExalgoPrimitives | null | string,
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
			{ type: primitives.ExalgoPrimitives.Entier, enterType: parameters.EnterParameter.E },
			{ type: '', enterType: parameters.EnterParameter.E }
		],
		description: 'Renvoie un entier aléatoire compris entre les premier paramètre (inclu) et le second paramètre',
		return: primitives.ExalgoPrimitives.Entier,
	},
	{
		name: 'lire',
		parameters: [
			{ type: 'chaîne', enterType: parameters.EnterParameter.E }
		],
		description: 'Demande à l\'utilisateur de rentrer une information',
		return: 'chaîne'
	},
];

export const exalgoMethodsGraphs: IExalgoMethods[] = [
	{
		name: 'créerGraphe',
		parameters: null,
		description: 'Crée un graphe',
		return: null,
	},
	{
		name: 'ajouterSommet',
		parameters: [
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			},
		],
		description: 'Ajoute un sommet dans le graphe',
		return: 'Sommet',
	},
	{
		name: 'ajouterArête',
		parameters: [
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			},
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			}
		],
		description: 'Ajoute une arête entre 2 sommets dans le graphe',
		return: 'Arete',
	},
	{
		name: 'supprimerSommets',
		parameters: [
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			}
		],
		description: 'Supprime un sommet dans le graphe',
		return: null,
	},
	{
		name: 'supprimerArête',
		parameters: [
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			}
		],
		description: 'Supprime une arête dans le graphe',
		return: null,
	},
	{
		name: 'nombreSommets',
		parameters: [],
		description: 'Compte le nombre de sommets du graphe',
		return: primitives.ExalgoPrimitives.Entier,
	},
	{
		name: 'nombreArêtes',
		parameters: [],
		description: '',
		return: '',
	},
	{
		name: 'sommets',
		parameters: null,
		description: 'Retourne un tableau de tous les sommets',
		return: 'Sommet[]',
	},
	{
		name: 'arêtes',
		parameters: [],
		description: 'Retourne un tableau de toutes les arêtes',
		return: 'Arêtes[]',
	},
	{
		name: 'voisins',
		parameters: [
			{
				type: 'voisins',
				enterType: parameters.EnterParameter.E
			}
		],
		description: '',
		return: null,
	},
	{
		name: '',
		parameters: [],
		description: '',
		return: null,
	},
	{
		name: '',
		parameters: [],
		description: '',
		return: null,
	},
	{
		name: '',
		parameters: [],
		description: '',
		return: null,
	},
	{
		name: '',
		parameters: [],
		description: '',
		return: null,
	},
];

export const exalgoMethodsDiGraphs: IExalgoMethods[] = [
	{
		name: 'créerDiGraphe',
		parameters: null,
		description: 'Créer un graphe orienté',
		return: 'null',
	},
	{
		name: 'ajouterSommet',
		parameters: [
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			},
		],
		description: 'Ajoute un sommet dans le graphe',
		return: 'Sommet',
	},
	{
		name: 'ajouterArc',
		parameters: [
			{
				type: 'Arc',
				enterType: parameters.EnterParameter.E
			},
		],
		description: 'Ajoute un arc dans le graphe',
		return: 'Arc',
	},
	{
		name: 'supprimerSommets',
		parameters: [
			{
				type: 'Sommet',
				enterType: parameters.EnterParameter.E
			}
		],
		description: 'Supprime un sommet dans le graphe',
		return: null,
	},
	{
		name: 'supprimerArc',
		parameters: [
			{
				type: 'Arc',
				enterType: parameters.EnterParameter.E
			}
		],
		description: 'Supprime un arc dans le graphe',
		return: null,
	},
	{
		name: 'nombreSommets',
		parameters: [],
		description: 'Compte le nombre de sommets du graphe',
		return: primitives.ExalgoPrimitives.Entier,
	},
	{
		name: 'nombreArc',
		parameters: [],
		description: 'Compte le nombre d\'arc du graphe',
		return: primitives.ExalgoPrimitives.Entier,
	},
	{
		name: 'sommets',
		parameters: null,
		description: 'Retourne un tableau de tous les sommets',
		return: 'Sommet[]',
	},
];
