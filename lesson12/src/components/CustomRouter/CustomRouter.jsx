import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Search } from '../componentslesson9';
import { PostList } from '../componentslesson10';
import { Post, Facebook } from '../componentslesson11';
export default function CustomRouter() {
	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to="/">Lesson9</Link>
					</li>
					<li>
						<Link to="/Lesson10">Lesson10</Link>
					</li>
					<li>
						<Link to="/Lesson11">Lesson11</Link>
					</li>
				</ul>

				<hr />

				<Switch>
					<Route exact path="/">
						<Lesson9 />
					</Route>
					<Route path="/Lesson10">
						<Lesson10 />
					</Route>
					<Route path="/Lesson11">
						<Lesson11 />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function Lesson9() {
	return (
		<div>
			<Search />
		</div>
	);
}

function Lesson10() {
	return (
		<div>
			<PostList />
		</div>
	);
}

function Lesson11() {
	const date = new Date().toLocaleDateString();
	const time = new Date().toLocaleTimeString();
	return (
		<div>
			<Post
				title="sunt aut facere repellat...."
				subtitle="quia et suscipit recusandae"
				author="Leanne Graham "
				href="#"
			/>
			<h1>TAsk2</h1>

			<Facebook
				name="Jason Kincaid"
				postDescription="I have something insightful to say,as usual"
				location="USA"
				timeTextTime={time}
				timeTextDate={date}
				onPressLike={() => alert('Click Like')}
				onPressReply={() => alert('Click reply')}
			/>
		</div>
	);
}
