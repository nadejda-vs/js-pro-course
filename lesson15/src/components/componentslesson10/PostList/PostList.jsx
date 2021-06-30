import { useEffect, useState, memo } from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { ACTIONS } from '../redux/constants';

export const PostList = memo(() => {
	const dispatch = useDispatch();

	const [user, setUser] = useState();
	const posts = useSelector((state) => state.postListReducer.posts);
	console.log({ posts });

	const error = useSelector((state) => state.postListReducer.error);

	const onClickPost = (user) => {
		setUser(user);
		// setIsModalOpened(true);
	};

	useEffect(() => {
		dispatch({ type: ACTIONS.GET_POSTS_REQUEST });
	}, []);
	useEffect(() => {
		if (error) {
			alert(error);
		}
	}, [error]);

	return (
		<Container>
			<ol>
				{posts &&
					posts.map((item, index) => (
						<Post
							key={index}
							// username={item.user.username}
							title={item.title}
							body={item.body}
							onClick={onClickPost}
							user={item.user}
							id={item.id}
						/>
					))}
			</ol>
		</Container>
	);
});
const Post = ({ title, body, onClick, id }) => {
	const history = useHistory();

	const onClickPost = () => {
		history.push(`/posts/${id}`);
	};

	return (
		<Background>
			{onClickPost}
			<li>
				<h5> {title}</h5>
			</li>
			<li> {body}</li>
		</Background>
	);
};

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
const Background = styled.p`
	background-color: #dedede;
	list-style: none;

	border: 1px inset black;
`;
