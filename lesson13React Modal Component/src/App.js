import logo from './logo.svg';
import './App.css';
import { Modal } from './Modal';
import { useState } from 'react';

function App() {
	const [modal, setModal] = useState({ modal1: false, modal2: false });
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button
					className="App-link"
					onClick={() => setModal({ ...modal, modal1: true })}
				>
					Open Modal 1
				</button>
				<button className="App-link">Open Modal 2</button>
			</header>

			<Modal
				title={'Modal 1 Title'}
				isOpened={modal.modal1}
				onModalClose={() => setModal({ ...modal, modal1: false })}
			>
				<img src={logo} className="App-logo" alt="logo" />
			</Modal>
		</div>
	);
}

export default App;
