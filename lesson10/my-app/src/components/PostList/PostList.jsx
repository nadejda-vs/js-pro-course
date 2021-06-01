import { useEffect, useState, memo } from 'react';
import { Post } from '../Post';
export const PostList = memo(() => {
	const [users, setUsers] = useState([]);
	const [posts, setPosts] = useState([]);
	useEffect(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const usersResponse = await response.json();
		const responsePost = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const postsResponse = await responsePost.json();
		setUsers(usersResponse);
		setPosts(postsResponse);
	}, []);
	return (
		<ol>
			{users.map((item) => (
				<li>{item.name}</li>
				// <Post username={item.username} />
			))}
			{posts.map((item) => (
				// <Post title={item.title} body={item.body} />
				<li>{item.body}</li>
			))}
		</ol>
	);
});
