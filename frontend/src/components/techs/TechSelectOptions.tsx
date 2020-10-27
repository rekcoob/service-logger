import React, { useEffect } from 'react';
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

const TechSelectOptions: React.FC<Props> = ({
	tech: { techs, loading },
	getTechs,
}) => {
	useEffect(() => {
		getTechs();
		// eslint-disable-next-line
	}, []);

	return (
		<>
			{!loading &&
				techs.length !== 0 &&
				techs.map((t) => (
					<option key={t._id} value={`${t.firstName} ${t.lastName}`}>
						{t.firstName} {t.lastName}
					</option>
				))}
		</>
	);
};

const mapState = (state: RootState) => ({
	tech: state.tech,
});

export default connect(mapState, { getTechs })(TechSelectOptions);
