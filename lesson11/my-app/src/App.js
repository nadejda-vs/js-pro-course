import './App.css';
import { Post, Facebook } from './components';
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
// функции onClickLike, onClickReply
function App() {
	return (
		<div className="App">
			<Post
				title="sunt aut facere repellat...."
				subtitle="quia et suscipit recusandae"
				author="Leanne Graham "
				href="#"
			/>
			<Facebook
				name="Jason Kincaid"
				postDescription="I have something insightful to say,as usual"
				location="USA"
				timeTextTime={time}
				timeTextDate={date}
			/>
		</div>
	);
}

export default App;
