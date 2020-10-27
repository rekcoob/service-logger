import React, { useEffect } from 'react';
import Preloader from '../layout/Preloader';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../../store/log/logActions';
import { RootState } from '../../store/rootReducer';

type Props = {
	log: {
		logs: ILog[];
		filtered: ILog[] | null;
		loading: boolean;
	};
	getLogs: () => void;
};

const Logs: React.FC<Props> = ({
	log: { logs, filtered, loading },
	getLogs,
}) => {
	useEffect(() => {
		getLogs();
		// [] only run once
		// eslint-disable-next-line
	}, []);

	if (loading || logs.length === 0) {
		return <Preloader />;
	}

	return (
		<ul className="collection with-header">
			<li className="collection-header">
				<h4 className="center">Service Tasks</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className="center">No logs to show...</p>
			) : filtered !== null ? (
				filtered.map((log) => <LogItem key={log._id} log={log} />)
			) : (
				logs.map((log: ILog) => <LogItem log={log} key={log._id} />)
			)}
		</ul>
	);
};

const mapState = (state: RootState) => ({
	log: state.log,
});

export default connect(mapState, { getLogs })(Logs);
