import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';
import {
	GET_TECHS,
	ADD_TECH,
	DELETE_TECH,
	SET_LOADING,
	TECHS_ERROR,
} from './types';

// Get techs from server
export const getTechs = (): ThunkAction<
	void,
	RootState,
	unknown,
	Action<string>
> => async (dispatch) => {
	try {
		setLoading();

		const res = await axios.get('/techs');
		// const data = res.data;

		dispatch({
			type: GET_TECHS,
			payload: res.data.techs,
		});
	} catch (err) {
		dispatch({
			type: TECHS_ERROR,
			payload: err.response,
		});
	}
};

// header config
const config = {
	headers: {
		'Content-Type': 'application/json',
	},
};

// Add technician to server
export const addTech = (
	tech: ITech
): ThunkAction<void, RootState, unknown, Action<string>> => async (
	dispatch
) => {
	try {
		setLoading();

		const res = await axios.post('/techs', tech, config);
		// const data = res.data;
		dispatch({
			type: ADD_TECH,
			payload: res.data,
		});
	} catch (error) {
		dispatch({
			type: TECHS_ERROR,
			payload: error.response,
		});
	}
};

// Delete log from server
export const deleteTech = (
	id: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
	dispatch
) => {
	try {
		setLoading();
		await axios.delete(`/techs/${id}`);

		// const res = await axios.get('/logs');
		// const data = res.data;
		dispatch({
			type: DELETE_TECH,
			payload: id,
		});
	} catch (error) {
		dispatch({
			type: TECHS_ERROR,
			payload: error.response.statusText,
		});
	}
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
