export const Button = ({ onClickButton, buttonName }) => {
	return (
		<div className="button">
			<button onClick={onClickButton}>{buttonName}</button>
		</div>
	);
};
