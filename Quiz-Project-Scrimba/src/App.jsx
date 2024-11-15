import React, { useState, useEffect } from 'react'
import './App.css'
import WelcomePage from "./components/WelcomePage.jsx"
import Question from "./components/Questions.jsx"
function App() {
    const [startQuiz, setStartQuiz] = useState(true);
    const [gameFinsihed, setGameFinished] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [error, setError] = useState("");
    const [userSelection, setUserSelection] = useState({
        amount: 5,
        category: 9,
        difficulty: 'easy',
    });
    function startGame() {
        setStartQuiz(false);
    }



    //hhttps://opentdb.com/api.php?amount=10&category=9&difficulty=hard&type=multiple
    useEffect(  () => {
        //set up only to run if user submits data
        const url = `https://opentdb.com/api.php?amount=${userSelection.amount}&category=${userSelection.category}&difficulty=${userSelection.difficulty}&type=multiple`;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network error was not ok`);
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setQuestions(data);
            })
            .catch(error => {
                console.error('Error', error);
            })
    }, [])

   // const questionElements = questions.map((question) => (
    //    <Question />
    //))
    //Keep track of answers in state
    //Keep count of correct answers to display

  return (
    <>
        {startQuiz && <WelcomePage startGame={startGame}/>}
        {!startQuiz && <section>

            <Question />
        </section>}
    </>
  )
}

export default App
