import React, {
    useState
} from 'react';
import Before from './components/Before'
import During from './components/During'
import After from './components/After'

function App(props) {
    const [numberCorrect, setNumberCorrect] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [questionData, setQuestionData] = useState({});
    const [quizStage, setQuizStage] = useState('before');
    const [correctAnswer, flagAnswer] = useState({
        id: null,
        result: false
    });

    function checkAnswer(param) {
        if (correctAnswer.id) {
            return
        }
        fetch('https://johnhorner.info/dkt/api/check-answer/?id=' + param)
            .then(response => response.json())
            .then((data) => data === 1 ? flagAnswer({
                id: param,
                result: true
            }, setNumberCorrect(numberCorrect + 1)) : flagAnswer({
                id: param,
                result: false
            }));
    }

    function fetchQuestion() {
        flagAnswer({
            id: null,
            result: false
        });
        fetch('https://johnhorner.info/dkt/api/get-question/json/?id=' + props.numbers[questionNumber])
            .then(response => response.json())
            .then(data => setQuestionData(data));
        setQuestionNumber(questionNumber + 1);
        if (questionNumber === props.numberofquestions) {
            setQuizStage('after')
        }
    }

    function startQuiz() {
        fetchQuestion();
        setQuizStage('during');
    }
    return (
        <div className="App">
		<Before quizStage={quizStage} questionNumber={questionNumber} startQuiz={startQuiz} numberOfQuestions={props.numberofquestions} />
		<During
			quizStage={quizStage}
			questionNumber={questionNumber}
			questionData={questionData}
			fetchQuestion={fetchQuestion}
			checkAnswer={checkAnswer}
			correctAnswer={correctAnswer} />
		<After  quizStage={quizStage} numberCorrect={numberCorrect} />
    </div>
    );
}

export default App;