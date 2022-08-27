function During(props) {
	if (props.quizStage !== 'during') {
		return null;
	}

	return (
		<div id="During">
			{props.questionData.image === '1' && <img src={"https://johnhorner.info/dkt/img/" + props.questionData.id + ".png"} alt={`illustration for question ${props.questionData.id}`} style={{ "float": "right" }} />}
			<p> {props.questionData.question_text}</p>
			<ul>
				{props.questionData.answers.map((item) => {
					return <li key={item.id} onClick={() => props.checkAnswer(item.id)}
						id={item.id}
						className={(props.correctAnswer.id === item.id ? 'chosen' : 'pending') + (props.correctAnswer.result ? 'correct' : 'incorrect')}
					>
						{item.text}
					</li>
				})}
			</ul>
			{props.correctAnswer.id && <button onClick={props.fetchQuestion}>next</button>}
			<br style={{ "clear": "both" }} />
		</div>
	);
}

export default During;