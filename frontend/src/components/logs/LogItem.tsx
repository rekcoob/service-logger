import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../store/log/logActions';

type PropsFromRedux = {
	deleteLog: (id: number) => void;
	setCurrent: (log: ILog) => { type: string; payload: ILog };
};

type Props = PropsFromRedux & {
	log: ILog;
};

const LogItem: React.FC<Props> = ({ log, deleteLog, setCurrent }) => {
	const { _id, message, attention, tech, date } = log;

	const onDelete = () => {
		deleteLog(_id);
		M.toast({ html: 'Log Deleted' });
	};

	return (
		<li className="collection-item">
			<div>
				<a
					href="#edit-log-modal"
					className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
					onClick={() => setCurrent(log)}
				>
					{message}
				</a>
				<br />
				<span className="grey-text">
					{/* <span className="black-text">ID #{_id}</span> */}
					last updated by <span className="black-text">{tech}</span> on{' '}
					<Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
				</span>
				<a href="#!" onClick={onDelete} className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
