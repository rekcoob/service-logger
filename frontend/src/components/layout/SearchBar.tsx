import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { searchLogs } from '../../store/log/logActions';

type PropsFromRedux = {
	searchLogs: (text: string) => void;
};

type Props = PropsFromRedux & {};

const SearchBar: React.FC<Props> = ({ searchLogs }) => {
	const searchInput = useRef<HTMLInputElement>(null);

	const handleChange = () => {
		if (searchInput.current !== null) {
			searchLogs(searchInput.current.value);
		}
	};

	return (
		<nav style={{ marginBottom: '30px' }} className="blue">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input
							id="search"
							type="search"
							placeholder="Search Logs..."
							ref={searchInput}
							onChange={handleChange}
						/>
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	);
};

export default connect(null, { searchLogs })(SearchBar);
