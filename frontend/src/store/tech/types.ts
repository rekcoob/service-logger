export const GET_TECHS = 'GET_TECHS';
export const ADD_TECH = 'ADD_TECH';
export const DELETE_TECH = 'DELETE_TECH';
export const SET_LOADING = 'SET_LOADING';
export const TECHS_ERROR = 'TECHS_ERROR';

export type TechState = {
	techs: ITech[];
	loading: boolean;
	error: string | null;
};

interface GetTechsAction {
	type: typeof GET_TECHS;
	payload: ITech[];
}

interface AddTechAction {
	type: typeof ADD_TECH;
	payload: ITech;
}

interface DeleteTechAction {
	type: typeof DELETE_TECH;
	payload: number;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
}

interface TechsErrorAction {
	type: typeof TECHS_ERROR;
	payload: string;
}

export type TechActionTypes =
	| GetTechsAction
	| AddTechAction
	| DeleteTechAction
	| SetLoadingAction
	| TechsErrorAction;
