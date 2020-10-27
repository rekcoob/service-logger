import { Response, Request } from 'express';
import { ILog } from '../types/log';
import Log from '../models/Log';

const getLogs = async (req: Request, res: Response): Promise<void> => {
	try {
		const logs: ILog[] = await Log.find();
		res.status(200).json({ logs });
	} catch (error) {
		throw error;
	}
};

const addLog = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<ILog, 'message' | 'attention' | 'tech'>;
		const log: ILog = new Log({
			message: body.message,
			attention: body.attention,
			tech: body.tech,
		});
		const newLog: ILog = await log.save();
		res.status(201).json(newLog);
	} catch (error) {
		throw error;
	}
};

const updateLog = async (req: Request, res: Response): Promise<void> => {
	try {
		const {
			params: { id },
			body,
		} = req;
		const updateLog: ILog | null = await Log.findByIdAndUpdate(
			{ _id: id },
			body,
			// return newLog instead of old Log
			// if Log doesn't exist, create it
			{ new: true }
		);
		res.status(200).json(updateLog);
	} catch (error) {
		throw error;
	}
};

const deleteLog = async (req: Request, res: Response): Promise<void> => {
	try {
		await Log.findByIdAndRemove(req.params.id);
		res.status(200).json({ message: 'Log deleted' });
	} catch (error) {
		throw error;
	}
};

export { getLogs, addLog, updateLog, deleteLog };
