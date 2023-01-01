import axios from 'axios'
import React, { useState, useContext } from 'react';

//This is for the category of each questions for this project in the api
const table = {
  computers:18,
  sports: 21,
  celebrities: 26,
  animals: 27,
  music:12,
}

//setting up the urls for this project.
const API_ENDPOINT = 'https://opentdb.com/api.php?'

/*const url = ''
const tempUrl =
  'https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple'*/
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  //setting the usestate needed for this project.
  const [quizOption, setQuizOption] = useState(true)
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState([])
  const [index, setIndex] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [error, setError] = useState(false)
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: 'computers',
    difficulty: 'easy',
  })
  const [isModal, setIsModal] = useState(false)

  //Fetching the data from opentdb api using axios aync/await.
  const fetchQuestions = async (url) => {
    setLoading(true)
    setQuizOption(false)
    const response = await axios(url).catch((err) => console.log(err));
    /* Thismeans if data is fetched then show the data (quiz questions) then if the
  questions is not less than 0 it should show the quiz else 
    it should show the options for the quiz and set error to true if
   there is a problem */ 
    if (response) {
      const data = response.data.results
      if (data.length > 0) {
        setQuestions(data)
        setLoading(false)
        setQuizOption(false)
        setError(false)
      } else {
        setQuizOption(true)
        setError(true)
      }
    } else {
      setQuizOption(true)
    }
  }

  //To set the next question
    /*if the index is higher than the 
    last question it should open the modal and return the checker to 0 
    else it should just return the current index*/

  const nextQuestion = () => {
    setIndex((oldIndex) => {
      const index = oldIndex + 1
      if (index > questions.length - 1) {
        openModal()
        return 0
      } else {
        return index
      }
    })
  }

  //setting up the correct answers
    //if the answer is correct the checker show increase to one then move to the next question
  const checkAnswer = (value) => {
    if (value) {
      setCorrectAnswer((oldState) => oldState + 1)
    }
    nextQuestion()
  }

  //this displays a modal with the score once all the questions have been answered
  const openModal = () => {
    setIsModal(true)
  }

  //this closes the modal and resets the quiz
  const closeModal = () => {
    setQuizOption(true)
    setCorrectAnswer(0)
    setIsModal(false)
  }

  //setting the onChange function
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setQuiz({ ...quiz, [name]: value })
  }

  //This sets the button function
  const handleSubmit = (e) => {
    e.preventDefault()
    const { amount, category, difficulty } = quiz

    const url = `${API_ENDPOINT}amount=${amount}&difficulty=${difficulty}&category=${table[category]}&type=multiple`
    fetchQuestions(url)
  }

  return (
    <AppContext.Provider
      value={{
        quizOption,
        loading,
        questions,
        index,
        correctAnswer,
        error,
        isModal,
        nextQuestion,
        checkAnswer,
        closeModal,
        quiz,
        handleChange,
        handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }