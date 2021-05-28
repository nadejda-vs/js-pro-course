import './App.css';

import { EmojiItem, ListItem, Input } from './components';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Input />
				<h1>Title+Symbols</h1>
				<EmojiItem />
				<ListItem arr={EmojiItem} />
			</header>
		</div>
	);
}

export default App;
