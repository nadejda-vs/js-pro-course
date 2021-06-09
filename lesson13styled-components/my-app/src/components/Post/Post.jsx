import styled from 'styled-components';
export const Post = ({ username, title, body }) => {
	return (
		<Background>
			<li> {username}</li>
			<li>
				<h5> {title}</h5>
			</li>
			<li> {body}</li>
		</Background>
	);
};
const Background = styled.p`
	background-color: #dedede;
	list-style: none;

	border: 1px inset black;
`;
