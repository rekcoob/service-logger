export const GET_LOGS = 'GET_LOGS';
export const ADD_LOG = 'ADD_LOG';
export const DELETE_LOG = 'DELETE_LOG';
export const UPDATE_LOG = 'UPDATE_LOG';
export const SEARCH_LOGS = 'SEARCH_LOGS';
export const SET_CURRENT = 'SET_CURRENT';
export const CLEAR_CURRENT = 'CLEAR_CURRENT';
export const SET_LOADING = 'SET_LOADING';
export const LOGS_ERROR = 'LOGS_ERROR';

export type LogState = {
	logs: ILog[];
	filtered: ILog[] | null;
	current: ILog | null;
	loading: boolean;
	error: string | null;
};

interface GetLogsAction {
	type: typeof GET_LOGS;
	payload: ILog[];
}

interface AddLogAction {
	type: typeof ADD_LOG;
	payload: ILog;
}

interface UpdateLogAction {
	type: typeof UPDATE_LOG;
	payload: ILog;
}

interface DeleteLogAction {
	type: typeof DELETE_LOG;
	payload: number;
}

interface SearchLogsAction {
	type: typeof SEARCH_LOGS;
	payload: string;
}

interface SetCurrentAction {
	type: typeof SET_CURRENT;
	payload: ILog;
}

interface ClearCurrentAction {
	type: typeof CLEAR_CURRENT;
}

interface SetLoadingAction {
	type: typeof SET_LOADING;
}

interface LogsErrorAction {
	type: typeof LOGS_ERROR;
	payload: string;
}

export type LogActionTypes =
	| GetLogsAction
	| AddLogAction
	| UpdateLogAction
	| DeleteLogAction
	| SearchLogsAction
	| SetCurrentAction
	| ClearCurrentAction
	| SetLoadingAction
	| LogsErrorAction;
