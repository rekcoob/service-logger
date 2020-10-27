import { combineReducers } from 'redux';
import { logReducer } from './log/logReducer';
import { techReducer } from './tech/techReducer';

export const rootReducer = combineReducers({
	log: logReducer,
	tech: techReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
