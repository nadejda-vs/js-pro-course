import { PostList } from './components';
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux';
function App() {
	return (
		<Provider store={store}>
			<header className="App-header">
				<PostList />
			</header>
		</Provider>
	);
}

export default App;
