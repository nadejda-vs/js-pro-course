import { Button } from '../Button';

export const Facebook = (props) => {
	//  name, postDescription, location, timeText,
	return (
		<div className="facebook-task">
			<h1>{props.name}</h1>
			<p>{props.postDescription}</p>
			<p>{props.location}</p>
			<p>{props.timeTextTime}</p>
			<p>{props.timeTextDate}</p>
			<Button buttonName="Like" onClickReply={() => alert('reply clicked')} />
			<Button buttonName="Reply" />
		</div>
	);
};
