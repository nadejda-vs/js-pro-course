import { useEffect, useState, memo } from 'react';
import { Post } from '../Post';

export const PostList = memo(() => {
	const [posts, setPosts] = useState([]);

	useEffect(async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/users');
		const usersResponse = await response.json();
		const responsePost = await fetch(
			'https://jsonplaceholder.typicode.com/posts'
		);
		const postsResponse = await responsePost.json();

		const posts = postsResponse.map((post) => {
			const user = usersResponse.find((user) => user.id === post.userId);

			return { ...post, user };
		});

		setPosts(posts);
	}, []);

	return (
		<ol>
			{posts.map((item) => (
				<Post username={item.username} title={item.title} body={item.body} />
			))}
		</ol>
	);
});
