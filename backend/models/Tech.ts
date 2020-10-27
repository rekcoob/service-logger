import { ITech } from '../types/tech';
import { model, Schema } from 'mongoose';

const techSchema: Schema = new Schema({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
});

export default model<ITech>('Tech', techSchema);
