export const User = ({ name, username, email, phone, website }) => {
	return (
		<div>
			<h2>{name}</h2>
			<h2>{username}</h2>
			<p>{email}</p>
			<p>{phone}</p>
			<p>{website}</p>
		</div>
	);
};
