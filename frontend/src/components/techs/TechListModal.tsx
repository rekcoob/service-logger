import React, { useEffect } from 'react';
import TechItem from './TechItem';
import { connect } from 'react-redux';
import { getTechs } from '../../store/tech/techActions';
import { RootState } from '../../store/rootReducer';

type PropsFromRedux = {
	tech: {
		techs: ITech[];
		loading: boolean;
	};
	getTechs: () => void;
};

type Props = PropsFromRedux & {};

const TechListModal: React.FC<Props> = ({
	tech: { techs, loading },
	getTechs,
}) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
					{!loading &&
						// techs !== null &&
						techs.length !== 0 &&
						techs.map((tech: ITech) => <TechItem tech={tech} key={tech._id} />)}
				</ul>
			</div>
		</div>
	);
};

const mapState = (state: RootState) => ({
	tech: state.tech,
});

export default connect(mapState, { getTechs })(TechListModal);
