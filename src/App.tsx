import React, {
    useState
} from 'react';
import Before from './components/Before'
import During from './components/During'
import After from './components/After'

let QuestionNumber: number = 0;

type Props = {
    numberofquestions: number,
    numbers: number[],
    questionNumber?: number,
}




function App(props: Props) {
    let numberOfQuestions = props.numberofquestions;
    const [numberCorrect, setNumberCorrect] = useState(0);
    const [questionNumber, setQuestionNumber] = useState(QuestionNumber);
    const [currentQuestionData, setCurrentQuestionData] = useState();
    const [quizStage, setQuizStage] = useState('before');
    const [correctAnswer, flagAnswer] = useState({
        id: null,
        result: false
    });

    function checkAnswer(param: any) {
        console.log("checking answer for: " + param)
        //if (correctAnswer.id) {
          //  return
        //}
        fetch('https://johnhorner.info/dkt/api/check-answer/?id=' + param)
            .then(response => response.json())
            .then((data)=>{
                console.log("data: " + data)
                if(data === 1){
                    console.log("answer was correct")
                    flagAnswer({
                        id: param,
                        result: true
                    })
                    setNumberCorrect(numberCorrect+1)
                }else{
                    flagAnswer({
                        id: param,
                        result: false
                    })
                }
            })


    }

    function fetchQuestion() {
        flagAnswer({
            id: null,
            result: false
        });
        fetch('https://johnhorner.info/dkt/api/get-question/json/?id=' + props.numbers[questionNumber])
            .then(response => response.json())
            .then(data => setCurrentQuestionData(data));
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
            <Before quizStage={quizStage} startQuiz={startQuiz} numberOfQuestions={props.numberofquestions} />
            <During 
                correctAnswer = {correctAnswer} 
                numberOfQuestions={numberOfQuestions} 
                quizStage={quizStage} 
                checkAnswer={checkAnswer} 
                fetchQuestion={fetchQuestion} 
                questionData={currentQuestionData} 
                />
            <After quizStage={quizStage} numberCorrect={numberCorrect} numberOfQuestions={props.numberofquestions} />
        </div>
    );
}

export default App;