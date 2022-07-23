function Before(props) {
    if (props.quizStage !== 'before') {
        return null;
    }
    return (
        <div id="before">
        	<p>You will be asked {props.numberOfQuestions} questions</p>
        	<button onClick={props.startQuiz}>start</button>
    	</div>
    );
}

export default Before;