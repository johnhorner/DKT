type Props = {
    quizStage: string,
    numberCorrect: number,
    numberOfQuestions: number
}

function After(props: Props) {
    if (props.quizStage !== 'after') {
        return null;
    }
    return (
        <div id="After">
            <h2>Finished</h2>
            <p>You got {props.numberCorrect} right and {props.numberOfQuestions - props.numberCorrect} wrong.</p>
        </div>
    );
}

export default After;