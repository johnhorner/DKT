import { MouseEventHandler } from 'react';

type Answer = {
	id: any,
	text: string,
	result: string
}

type QuestionData = {
	question_text: string,
	id: string,
	image: string,
	answers: Answer[],
}

type Props = {
	numberOfQuestions: number,
	checkAnswer: MouseEventHandler,
	quizStage: string,
	correctAnswer: Answer,
	questionData: QuestionData,
	fetchQuestion: MouseEventHandler,
}


function During(props: Props) {
	if (props.quizStage !== 'during') {
		return null;
	}

	return (
		<div id="During">
			{props.questionData.image === '1' && <img src={"https://johnhorner.info/dkt/img/" + props.questionData.id + ".png"} alt={`illustration for question ${props.questionData.id}`} style={{ "float": "right" }} />}
			<p> {props.questionData?.question_text}</p>
			<ul>
				{props.questionData?.answers?.map((item: Answer) => {
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