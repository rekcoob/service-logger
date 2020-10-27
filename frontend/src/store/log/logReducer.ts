import {
	GET_LOGS,
	SET_LOADING,
	ADD_LOG,
	UPDATE_LOG,
	DELETE_LOG,
	SEARCH_LOGS,
	LOGS_ERROR,
	SET_CURRENT,
	CLEAR_CURRENT,
	LogActionTypes,
	LogState,
} from './types';

const initialState: LogState = {
	logs: [],
	filtered: null,
	current: null,
	loading: false,
	error: null,
};

export const logReducer = (state = initialState, action: LogActionTypes) => {
	switch (action.type) {
		case GET_LOGS:
			return {
				...state,
				logs: action.payload,
				loading: false,
			};
		case ADD_LOG:
			return {
				...state,
				logs: [...state.logs, action.payload],
				loading: false,
			};
		case UPDATE_LOG:
			return {
				...state,
				logs: state.logs.map((log) =>
					log._id === action.payload._id ? action.payload : log
				),
			};
		case DELETE_LOG:
			return {
				...state,
				logs: state.logs.filter((log: ILog) => log._id !== action.payload),
				loading: false,
			};
		case SEARCH_LOGS:
			return {
				...state,
				filtered: state.logs.filter((log) => {
					const regex = new RegExp(`${action.payload}`, 'gi');
					return log.message.match(regex) || log.tech.match(regex);
				}),
			};
		case SET_CURRENT:
			return {
				...state,
				current: action.payload,
			};
		case CLEAR_CURRENT:
			return {
				...state,
				current: null,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case LOGS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
