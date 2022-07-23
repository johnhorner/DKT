function After(props) {
    if (props.quizStage !== 'after') {
        return null;
    }
    return (
        <div id="After">
		<h2>Finished</h2>
        	<p>You got {props.numberCorrect} right and {10 - props.numberCorrect} wrong.</p>
    	</div>
    );
}

export default After;