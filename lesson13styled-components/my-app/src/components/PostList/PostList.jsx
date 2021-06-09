import { useEffect, useState, memo } from 'react';
import { Post } from '../Post';
import styled from 'styled-components';
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
			<Container>
				{posts.map((item) => (
					<Post
						username={item.user.username}
						title={item.title}
						body={item.body}
					/>
				))}
			</Container>
		</ol>
	);
});
const Container = styled.div`
	justify-content: center;
	background-color: #bababa;
	font-size: 45px;
	text-align: center;
	justify-content: center;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 2vw;
	padding: 0.5em;

	color: rgb(26, 23, 26);
`;
