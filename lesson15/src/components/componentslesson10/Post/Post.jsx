import styled from 'styled-components';
export const Post = ({ username, title, body, onClick, user, id }) => {
	const onClickPost = () => {
		onClick(user);
	};
	return (
		<Background>
			<li> {username}</li>
			<li>
				<h5> {title}</h5>
			</li>
			<li> {body}</li>
			<li> {id}</li>
			<button onClick={onClickPost}>{username}</button>
		</Background>
	);
};
const Background = styled.p`
	background-color: #dedede;
	list-style: none;

	border: 1px inset black;
`;
