import React, { useState, useEffect } from 'react'
import './App.css'
import WelcomePage from "./components/WelcomePage.jsx"

function App() {
    const [startQuiz, setStartQuiz] = useState(true);
    const [gameFinsihed, setGameFinished] = useState(false);

    function startGame() {
        setStartQuiz(false);
    }
    //Conditional render start of game based on state
    //use useEffect pull data from api for questions
        //use map to render questions
    //Keep track of answers in state
    //Keep count of correct answers to display

  return (
    <>
        {startQuiz && <WelcomePage startGame={startGame}/>}
    </>
  )
}

export default App
