import * as primitives from './primitives';

export enum EnterParameter {
	E,
	ES,
	S
}

export interface IParameter {
	type: primitives.ExalgoPrimitives | string,
	enterType: EnterParameter,
}
