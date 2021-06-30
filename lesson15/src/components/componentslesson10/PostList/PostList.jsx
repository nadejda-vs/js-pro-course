import { useEffect, useState, memo } from 'react';
// import { Post } from '../Post';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
// import { User } from './User';
import { useDispatch, useSelector } from 'react-redux';
// import { postsSaga } from '../../redux/sagas';
import { ACTIONS } from '../redux/constants';

export const PostList = memo(() => {
	// const [posts, setPosts] = useState([]);

	const dispatch = useDispatch();
	const history = useHistory();

	const [user, setUser] = useState();
	const posts = useSelector((state) => state.postListReducer.posts);
	console.log({ posts });

	const error = useSelector((state) => state.postListReducer.error);

	// const [isModalOpened, setIsModalOpened] = useState(false);

	const onClickPost = (user) => {
		setUser(user);
		// setIsModalOpened(true);
	};

	useEffect(async () => {
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
						/>
					))}
			</ol>
		</Container>
	);
});
const Post = ({ onClick, id }) => {
	const history = useHistory();

	const onClickPost = () => {
		history.push(`/posts/${id}`);
	};

	return <Post onClick={onClickPost} />;
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
