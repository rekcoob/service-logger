import { Response, Request } from 'express';
import { ITech } from '../types/tech';
import Tech from '../models/Tech';

const getTechs = async (req: Request, res: Response): Promise<void> => {
	try {
		const techs: ITech[] = await Tech.find();
		res.status(200).json({ techs });
	} catch (error) {
		throw error;
	}
};

const addTech = async (req: Request, res: Response): Promise<void> => {
	try {
		const body = req.body as Pick<ITech, 'firstName' | 'lastName'>;
		const tech: ITech = new Tech({
			firstName: body.firstName,
			lastName: body.lastName,
		});
		const newTech: ITech = await tech.save();
		// const allTechs: ITech[] = await Tech.find();
		res
			.status(201)
			// .json({ message: 'Tech added', tech: newTech, techs: allTechs });
			.json(newTech);
	} catch (error) {
		throw error;
	}
};

const deleteTech = async (req: Request, res: Response): Promise<void> => {
	try {
		// const deletedTech: ITech | null = await Tech.findByIdAndRemove(
		// 	req.params.id
		// );
		await Tech.findByIdAndRemove(req.params.id);
		// const allTechs: ITech[] = await Tech.find();
		// res.status(200).json({
		// 	message: 'Tech deleted',
		// 	tech: deletedTech,
		// 	techs: allTechs,
		// });
		res.status(200).json({ message: 'Tech deleted' });
	} catch (error) {
		throw error;
	}
};

export { getTechs, addTech, deleteTech };
