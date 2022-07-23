import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

let number_of_questions = 10;
let numbers = [];
for (let i = 1; i < 364; i++) {
    numbers.push(i)
}
numbers = shuffle(numbers);

ReactDOM.render(
    <React.StrictMode>
    <App numberofquestions={number_of_questions} numbers={numbers} />
  </React.StrictMode>,
    document.getElementById('quiz')
);

function shuffle(array) {
    var m = array.length,
        t, i;
    while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}