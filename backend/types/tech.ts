import { Document } from 'mongoose';

export interface ITech extends Document {
	firstName: string;
	lastName: string;
}
