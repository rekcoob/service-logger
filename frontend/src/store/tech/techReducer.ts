import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
	TechActionTypes,
	TechState,
} from './types';

const initialState: TechState = {
	techs: [],
	loading: false,
	error: null,
};

export const techReducer = (state = initialState, action: TechActionTypes) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false,
			};
		case ADD_TECH:
			return {
				...state,
				techs: [...state.techs, action.payload],
				loading: false,
			};
		case DELETE_TECH:
			return {
				...state,
				techs: state.techs.filter((tech: ITech) => tech._id !== action.payload),
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case TECHS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
