/**
 * Log Interface
 */
interface ILog {
	_id: number;
	message: string;
	attention: boolean;
	tech: string;
	date: Date;
}

/**
 * Technician Interface
 */
interface ITech {
	_id: number;
	firstName: string;
	lastName: string;
}
