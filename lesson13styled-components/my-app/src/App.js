import { Modal, PostList } from './components';
import './App.css';
function App() {
	return (
		<header className="App-header">
			<Modal>
				<PostList />
				<Modal />
			</Modal>
		</header>
	);
}

export default App;
