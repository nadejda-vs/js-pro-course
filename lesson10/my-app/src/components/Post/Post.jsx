export const Post = ({ username, title, body }) => {
	return (
		<div>
			<li> {username}</li>
			<li> {title}</li>
			<li> {body}</li>
		</div>
	);
};
