import { Document } from 'mongoose';

export interface ILog extends Document {
	message: string;
	attention: boolean;
	tech: string;
	date: Date;
}
