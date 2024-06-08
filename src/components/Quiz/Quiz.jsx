import { useState } from 'react'
import './Quiz.css'
import { data } from '../../assets/data';

const Quiz = () => {

    let [index, setIndex] = useState(1);
    let [question,setQuestion] = useState(data[index])

    const checkAnswer = (element, ans)=> {
        if (question.ans === ans) {
            element.target.classList.add('correct')
        } else {
            element.target.classList.add('incorrect')
        }
    }


  return (
    <div className='container'>
    <h1>Quiz App</h1> 
    <hr/>
    <h2>{index+1}. {question.question}</h2>
    <ul>
        <li onClick={(element) => {checkAnswer(element,1)}}>{question.option1}</li>
        <li onClick={(element) => {checkAnswer(element,2)}}>{question.option2}</li>
        <li onClick={(element) => {checkAnswer(element,3)}}>{question.option3}</li>
        <li onClick={(element) => {checkAnswer(element,4)}}>{question.option4}</li>
    </ul>
    <button>Next</button>
    <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz