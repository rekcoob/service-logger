import { ILog } from '../types/log';
import { model, Schema } from 'mongoose';

const logSchema: Schema = new Schema({
	message: {
		type: String,
		required: true,
	},
	attention: {
		type: Boolean,
		required: true,
	},
	tech: {
		type: String,
		required: true,
	},
	date: {
		type: Date,
		default: Date.now,
	},
});

export default model<ILog>('Log', logSchema);
