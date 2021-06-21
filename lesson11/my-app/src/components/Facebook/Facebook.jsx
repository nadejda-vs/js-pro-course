import { Button } from '../Button';

export const Facebook = (props) => {
	return (
		<div className="facebook-task">
			<h1>{props.name}</h1>
			<p>{props.postDescription}</p>
			<p>{props.location}</p>
			<p>{props.timeTextTime}</p>
			<p>{props.timeTextDate}</p>
			<Button buttonName="Like" onClickReply={props.onPressLike} />
			<Button buttonName="Reply" onClickReply={props.onPressReply} />
		</div>
	);
};
