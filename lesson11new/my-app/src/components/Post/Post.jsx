export const Post = (props) => {
	return (
		<div className="post-class">
			<h1>Task1</h1>
			<h2>{props.title}</h2>
			<p>{props.subtitle}</p>
			<p>
				Author: <a href={props.href}> {props.author}</a>
			</p>
		</div>
	);
};
