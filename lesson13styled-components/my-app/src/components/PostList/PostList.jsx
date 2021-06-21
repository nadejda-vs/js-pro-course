import { useEffect, useState, memo } from 'react';
import { Post } from '../Post';
import styled from 'styled-components';
import { Modal } from '../index';
import { User } from './User';

export const PostList = memo(() => {
	const [posts, setPosts] = useState([]);
	const [isModalOpened, setIsModalOpened] = useState(false);
	const [user, setUser] = useState();

	const onClickPost = (user) => {
		setUser(user);
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
		console.log(usersResponse);
		const postsResponse = await responsePost.json();
		console.log(postsResponse);
		const posts = postsResponse.map((post) => {
			const user = usersResponse.find((user) => user.id === post.userId);
			return { ...post, user };
		});
		console.log(posts);
		setPosts(posts);
	}, []);

	return (
		<>
			{isModalOpened && posts ? (
				<Modal closeModal={closeModal}>
					<User
						name={user.name}
						username={user.username}
						email={user.email}
						phone={user.phone}
						website={user.website}
					/>
				</Modal>
			) : null}
			<Container>
				<ol>
					{posts &&
						posts.map((item, index) => (
							<Post
								key={index}
								username={item.user.username}
								title={item.title}
								body={item.body}
								onClick={onClickPost}
								user={item.user}
							/>
						))}
				</ol>
			</Container>
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
