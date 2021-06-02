export const Post = (props) => {
	return (
		<div>
			<li> {props.username}</li>
			<li> {props.title}</li>
			<li> {props.body}</li>
		</div>
	);
};
