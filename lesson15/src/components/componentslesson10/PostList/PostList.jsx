import { useEffect, memo } from 'react';

import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { ACTIONS } from '../redux/constants';

export const PostList = memo(() => {
	const dispatch = useDispatch();

	// const [user, setUser] = useState();
	const posts = useSelector((state) => state.postListReducer.posts);
	console.log({ posts });

	const error = useSelector((state) => state.postListReducer.error);

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
							title={item.title}
							body={item.body}
							userId={item.user}
							id={item.id}
						/>
					))}
			</ol>
		</Container>
	);
});

const Post = ({ title, body, userId, id }) => {
	const history = useHistory();

	const onClickShowUser = () => {
		history.push(`/users/${id}`);
	};

	return (
		<Background>
			<li>
				<h5> {title}</h5>
			</li>
			<li> {body}</li>
			<button onClick={onClickShowUser}>Show user</button>
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
