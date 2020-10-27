import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../rootReducer';
import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SET_CURRENT,
	CLEAR_CURRENT,
	SEARCH_LOGS,
} from './types';

// Get logs from server
export const getLogs = (): ThunkAction<
	void,
	RootState,
	unknown,
	Action<string>
> => async (dispatch) => {
	try {
		setLoading();
		const res = await axios.get('/logs');
		dispatch({
			type: GET_LOGS,
			payload: res.data.logs,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
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

// Add new log
export const addLog = (
	log: ILog
): ThunkAction<void, RootState, unknown, Action<string>> => async (
	dispatch
) => {
	try {
		setLoading();
		const res = await axios.post('/logs', log, config);
		dispatch({
			type: ADD_LOG,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response,
		});
	}
};

// Update log on server
export const updateLog = (
	log: ILog
): ThunkAction<void, RootState, unknown, Action<string>> => async (
	dispatch
) => {
	try {
		setLoading();
		const res = await axios.put(`/logs/${log._id}`, log, config);
		dispatch({
			type: UPDATE_LOG,
			payload: res.data,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response,
		});
	}
};

// Delete log from server
export const deleteLog = (
	id: number
): ThunkAction<void, RootState, unknown, Action<string>> => async (
	dispatch
) => {
	try {
		setLoading();
		await axios.delete(`/logs/${id}`);
		dispatch({
			type: DELETE_LOG,
			payload: id,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response,
		});
	}
};

// Search server logs
export const searchLogs = (
	text: string
): ThunkAction<void, RootState, unknown, Action<string>> => async (
	dispatch
) => {
	try {
		setLoading();
		dispatch({
			type: SEARCH_LOGS,
			payload: text,
		});
	} catch (err) {
		dispatch({
			type: LOGS_ERROR,
			payload: err.response,
		});
	}
};

// Set current log
export const setCurrent = (log: ILog) => {
	return {
		type: SET_CURRENT,
		payload: log,
	};
};

// Clear current log
export const clearCurrent = () => {
	return {
		type: CLEAR_CURRENT,
	};
};

// Set loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
