import { Button } from '../Button';

export const Facebook = ({
	name,
	postDescription,
	location,
	timeTextTime,
	timeTextDate,
	onPressLike,
	onPressReply,
}) => {
	return (
		<div className="facebook-task">
			<h1>{name}</h1>
			<p>{postDescription}</p>
			<p>{location}</p>
			<p>{timeTextTime}</p>
			<p>{timeTextDate}</p>
			<Button buttonName="Like" onClickButton={onPressLike} />
			<Button buttonName="Reply" onClickButton={onPressReply} />
		</div>
	);
};
