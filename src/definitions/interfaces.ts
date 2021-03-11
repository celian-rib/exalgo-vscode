export interface IExalgoClass {
	name: string,
	description: string,
}

export interface IExalgoMethods {
	name: string,
	parameters: IParameter[] | null,
	description: string,
	return: IExalgoReturnType | null,
}

export enum EnterParameter {
	E,
	ES,
	S
}

export interface IParameter {
	type: ExalgoPrimitives | IExalgoClass,
	enterType: EnterParameter,
}

export enum ExalgoPrimitives {
	Entier = 'Entier',
	Reel = 'Réel',
	Caractere = 'Caractère',
	Booleen = 'Booléen'
}

export interface IExalgoReturnType {
    type: IExalgoClass | ExalgoPrimitives,
    isArray?: boolean
}
