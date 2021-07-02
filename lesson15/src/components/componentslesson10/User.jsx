import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ACTIONS } from './redux/constants';

export const User = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.postListReducer.user);
	console.log({ user });
	useEffect(() => {
		dispatch({
			type: ACTIONS.GET_USER_REQUEST,
			id: params.id,
		});
	}, []);

	return (
		<div>
			<h1>{user.name}</h1>
			<h4>{user.username}</h4>
			<h4>{user.website}</h4>
			<h4>{user?.address?.street}</h4>
			<h4>{user?.address?.suite}</h4>
		</div>
	);
};
