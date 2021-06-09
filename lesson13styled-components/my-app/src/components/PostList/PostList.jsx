import { useEffect, useState, memo } from 'react';
import { Post } from '../Post';
import styled from 'styled-components';
import { Modal } from '../index';

export const PostList = memo(() => {
	const [posts, setPosts] = useState([]);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const onClickPost = ([]) => {
		setPosts([]);
		setIsModalOpened(true);
	};
	const closeModal = () => {
		setIsModalOpened(false);
	};
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
		<>
			{isModalOpened ? (
				<Modal closeModal={closeModal}>
					<Post username={setPosts} onClick={onClickPost()} />
				</Modal>
			) : null}{' '}
			<ol>
				<Container>
					{posts.map((item, index) => (
						<Post
							key={index}
							username={item.user.username}
							title={item.title}
							body={item.body}
							onClick={onClickPost(item.title)}
						/>
					))}
				</Container>
			</ol>
		</>
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
