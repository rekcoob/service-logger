import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../store/tech/techActions';

type PropsFromRedux = {
	addTech: (tech: ITech | any) => void;
};

type Props = PropsFromRedux & {};

const AddTechModal: React.FC<Props> = ({ addTech }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');

	const onSubmit = () => {
		if (firstName === '' || lastName === '') {
			M.toast({ html: 'Please enter the first and last name' });
		} else {
			addTech({
				firstName,
				lastName,
			});
			M.toast({ html: `${firstName} ${lastName} was added as a tech` });
			// Clear Fields
			setFirstName('');
			setLastName('');
		}
	};

	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>New Technician</h4>
				<div className="row">
					<div className="row">
						<div className="input-field">
							<input
								type="text"
								name="firstName"
								value={firstName}
								onChange={(e) => setFirstName(e.target.value)}
							/>
							<label htmlFor="firstName" className="active">
								First Name
							</label>
						</div>
					</div>
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
						<label htmlFor="lastName" className="active">
							Last Name
						</label>
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

export default connect(null, { addTech })(AddTechModal);
