import * as classes from './classes';
import * as exalgo from './interfaces';

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

/**
 *
 */
export function getAllMethods(): exalgo.IExalgoMethods[] {
	return exalgoMethods
		.concat(exalgoMethodsGraphs)
		.concat(exalgoMethodsDiGraphs);
}

export const exalgoMethods: exalgo.IExalgoMethods[] = [
	{
		name: 'écrire',
		parameters: [
			{ type: classes.Chaine, enterType: exalgo.EnterParameter.E }
		],
		description: 'Affiche dans la console',
		return: null,
	},
	{
		name: 'entierAléatoire',
		parameters: [
			{ type: exalgo.ExalgoPrimitives.Entier, enterType: exalgo.EnterParameter.E },
			{ type: exalgo.ExalgoPrimitives.Entier, enterType: exalgo.EnterParameter.E }
		],
		description: 'Renvoie un entier aléatoire compris entre les premier paramètre (inclu) et le second paramètre',
		return: { type: exalgo.ExalgoPrimitives.Entier }
	},
	{
		name: 'lire',
		parameters: [
			{ type: classes.Chaine, enterType: exalgo.EnterParameter.E }
		],
		description: 'Demande à l\'utilisateur de rentrer une information',
		return: { type: classes.Chaine }
	},
];

export const exalgoMethodsGraphs: exalgo.IExalgoMethods[] = [
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
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			},
		],
		description: 'Ajoute un sommet dans le graphe',
		return: { type: classes.Sommet },
	},
	{
		name: 'ajouterArête',
		parameters: [
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			},
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			}
		],
		description: 'Ajoute une arête entre 2 sommets dans le graphe',
		return: { type: classes.Arete },
	},
	{
		name: 'supprimerSommets',
		parameters: [
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			}
		],
		description: 'Supprime un sommet dans le graphe',
		return: null,
	},
	{
		name: 'supprimerArête',
		parameters: [
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			}
		],
		description: 'Supprime une arête dans le graphe',
		return: null,
	},
	{
		name: 'nombreSommets',
		parameters: [],
		description: 'Compte le nombre de sommets du graphe',
		return: { type: exalgo.ExalgoPrimitives.Entier }
	},
	{
		name: 'nombreArêtes',
		parameters: [],
		description: 'Compte le nombre d\'arête du graphe',
		return: { type: exalgo.ExalgoPrimitives.Entier },
	},
	{
		name: 'sommets',
		parameters: null,
		description: 'Retourne un tableau de tous les sommets',
		return: { type: classes.Sommet, isArray: true },
	},
	{
		name: 'arêtes',
		parameters: null,
		description: 'Retourne un tableau de toutes les arêtes',
		return: { type: classes.Arete, isArray: true },
	},
	{
		name: 'voisins',
		parameters: [
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			}
		],
		description: '',
		return: { type: classes.Sommet, isArray: true },
	},
];

export const exalgoMethodsDiGraphs: exalgo.IExalgoMethods[] = [
	{
		name: 'créerDiGraphe',
		parameters: null,
		description: 'Créer un graphe orienté',
		return: null,
	},
	{
		name: 'ajouterSommet',
		parameters: [
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			},
		],
		description: 'Ajoute un sommet dans le graphe',
		return: { type: classes.Sommet },
	},
	{
		name: 'ajouterArc',
		parameters: [
			{
				type: classes.Arc,
				enterType: exalgo.EnterParameter.E
			},
		],
		description: 'Ajoute un arc dans le graphe',
		return: { type: classes.Arc },
	},
	{
		name: 'supprimerSommets',
		parameters: [
			{
				type: classes.Sommet,
				enterType: exalgo.EnterParameter.E
			}
		],
		description: 'Supprime un sommet dans le graphe',
		return: null,
	},
	{
		name: 'supprimerArc',
		parameters: [
			{
				type: classes.Arc,
				enterType: exalgo.EnterParameter.E
			}
		],
		description: 'Supprime un arc dans le graphe',
		return: null,
	},
	{
		name: 'nombreSommets',
		parameters: [],
		description: 'Compte le nombre de sommets du graphe',
		return: { type: exalgo.ExalgoPrimitives.Entier },
	},
	{
		name: 'nombreArc',
		parameters: [],
		description: 'Compte le nombre d\'arc du graphe',
		return: { type: exalgo.ExalgoPrimitives.Entier },
	},
	{
		name: 'sommets',
		parameters: null,
		description: 'Retourne un tableau de tous les sommets',
		return: { type: classes.Sommet, isArray: true },
	},
];
