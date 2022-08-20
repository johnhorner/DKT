import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let number_of_questions = 10;
let numbers:number[] = [];
for (let i = 1; i < 364; i++) {
    numbers.push(i)
}

const shuffle = (input:number[]) => {
    var m = input.length,
        t, i;
        
        
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = input[m];
        input[m] = input[i];
        input[i] = t;
    }
    return input;
}

numbers = shuffle(numbers);

ReactDOM.render(
    <React.StrictMode>
        <App numberofquestions={number_of_questions} numbers={numbers} />
    </React.StrictMode>,
    document.getElementById('quiz')
);

