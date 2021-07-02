import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { User } from '../componentslesson10/User';
import { PostList } from '../componentslesson10';
import { Facebook } from '../componentslesson11';

export const CustomRouter = () => {
	return (
		<Router>
			<div>
				<ul>
					{/* <li>
						<Link to="/">First page</Link>
					</li> */}
					<li>
						<Link to="/Lesson10">Lesson10</Link>
					</li>
					<li>
						<Link to="/Lesson11">Lesson11</Link>
					</li>
				</ul>
				<hr />

				<Switch>
					<Route exact path="/users/:id">
						<User />
					</Route>
					<Route exact path="/Lesson10/">
						<Lesson10 />
					</Route>
					<Route exact path="/Lesson11">
						<Lesson11 />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

// function Lesson9() {
// 	return <div>First Page</div>;
// }

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
