import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/LogList';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

const App = () => {
	useEffect(() => {
		// Init Materialize JS
		M.AutoInit();
	});

	return (
		<>
			<SearchBar />
			<div className="container">
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<Logs />
				<TechListModal />
			</div>
		</>
	);
};

export default App;
