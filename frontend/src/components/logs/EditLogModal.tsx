import React, { useEffect, useState } from 'react';
import TechSelectOptions from '../techs/TechSelectOptions';
import { connect } from 'react-redux';
import { updateLog } from '../../store/log/logActions';
import { RootState } from '../../store/rootReducer';

type PropsFromRedux = {
	current: ILog | null;
	updateLog: (log: ILog | any) => void;
};

type Props = PropsFromRedux & {};

const EditLogModal: React.FC<Props> = ({ current, updateLog }) => {
	const [message, setMessage] = useState('');
	const [attention, setAttention] = useState<any>(false);
	const [tech, setTech] = useState('');

	useEffect(() => {
		if (current) {
			setMessage(current.message);
			setAttention(current.attention);
			setTech(current.tech);
		}
	}, [current]);

	const onSubmit = () => {
		if (message === '' || tech === '') {
			M.toast({ html: 'Please enter a message and tech' });
		} else {
			const updatedLog = {
				_id: current?._id,
				message: message,
				attention,
				tech,
				date: new Date(),
			};
			updateLog(updatedLog);
			M.toast({ html: `Log updated by ${tech}` });
			// Clear Fields
			setMessage('');
			setTech('');
			setAttention(false);
		}
	};

	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="message"
							value={message}
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<select
							name="tech"
							value={tech}
							className="browser-default"
							onChange={(e) => setTech(e.target.value)}
						>
							<option value="" disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<p>
							<label>
								<input
									type="checkbox"
									className="filled-in"
									checked={attention}
									value={attention}
									onChange={(e) => setAttention(!attention)}
								/>
								<span>Needs Attention</span>
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect blue waves-light btn"
				>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: '75%',
	height: '75%',
};

const mapState = (state: RootState) => ({
	current: state.log.current,
});

export default connect(mapState, { updateLog })(EditLogModal);
