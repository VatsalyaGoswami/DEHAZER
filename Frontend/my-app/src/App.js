import React from 'react';
import './App.css';
import Info from './components/Info';
import { Navbar } from './components/Navbar';
import Team from './components/Team';

import Form from './Form';

function App() {
	return (
		<div>
			<Navbar />
			<Info />
			<Form />
			<Team />
		</div>
	);
}

export default App;
