import styled from 'styled-components';
export const Post = ({ username, title, body, onClick, user }) => {
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

			<button onClick={onClickPost}>{username}</button>
		</Background>
	);
};
const Background = styled.p`
	background-color: #dedede;
	list-style: none;

	border: 1px inset black;
`;
