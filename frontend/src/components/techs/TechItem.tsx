import React from 'react';
import { connect } from 'react-redux';
import { deleteTech } from '../../store/tech/techActions';

type PropsFromRedux = {
	deleteTech: (id: number) => void;
};

type Props = PropsFromRedux & {
	tech: ITech;
};

const TechItem: React.FC<Props> = ({
	tech: { _id, firstName, lastName },
	deleteTech,
}) => {
	// const { id, firstName, lastName } = tech;

	const onDelete = () => {
		deleteTech(_id);
		M.toast({ html: 'Technician Deleted' });
	};

	return (
		<li className="collection-item">
			<div className="">
				{firstName} {lastName}
				<a href="#!" onClick={onDelete} className="secondary-content">
					<i className="material-icons grey-text">delete</i>
				</a>
			</div>
		</li>
	);
};

export default connect(null, { deleteTech })(TechItem);
