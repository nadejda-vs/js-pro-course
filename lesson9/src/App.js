import './App.css';

import { EmojiItem, ListItem, Input } from './components';

import emojiArr from './emoji.json';
function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Input />
				<h1>Title+Symbols</h1>
				<EmojiItem />
				<ListItem array={emojiArr} />
			</header>
		</div>
	);
}

export default App;
