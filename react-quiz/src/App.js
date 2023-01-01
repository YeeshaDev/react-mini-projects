import React from 'react';
import './App.css';
import SetupForm from './Components/SetupForm';
import Modal from './Components/Modal';
import Loading from './Components/Loading';
import {useGlobalContext} from './context';

function App() {
  const {
    quizOption,
    loading,
    questions,
    index,
    correctAnswer,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext()
  if (quizOption) {
    return <SetupForm />
  }
  if (loading) {
    return <Loading />
  }

  const { question, incorrect_answers, correct_answer } = questions[index]
  // const answers = [...incorrect_answers, correct_answer]
  let answer = [...incorrect_answers]
  const tempIndex = Math.floor(Math.random() * 4)
  if (tempIndex === 3) {
    answer.push(correct_answer)
  } else {
    answer.push(answer[tempIndex])
    answer[tempIndex] = correct_answer
  }
  return (
    <main>
      <Modal />
      <section className='quiz'>
        <p className='correct-answers'>
          correct answers : {correctAnswer}/{questions.length}
        </p>
        <article className='container'>
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div className='btn-container'>
            {answer.map((answer, index) => {
              return (
                <button
                  key={index}
                  className='answer-btn'
                  onClick={() => checkAnswer(correct_answer === answer)}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              )
            })}
          </div>
        </article>
        <button className='next-question' onClick={nextQuestion}>
          next question
        </button>
      </section>
    </main>
  )

  
}

export default App;
