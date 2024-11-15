import React from "react";

export default function WelcomePage(props) {
    return (
    <div>
        <div>
            <h1>Quizzical</h1>
        </div>
        <h3>Please choose below to start the game</h3>
        <div>
            <div>
                <label for="category">Choose a Category:</label>
                <select id="category" name="category">
                    <option value="General Knowledge">General Knowledge</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                    <option value="">value</option>
                </select>
            </div>
            <button onClick={props.startGame}>Start Game</button>
        </div>
    </div>
    )
}

//https://opentdb.com/api_category.php

//max 50 questions per call

//General Knowledge
//Entertainment: Books
//Entertainment: Film
//Entertainment: Music
//Entertainment: Music
//Entertainment: Musicals & Theatres
//Entertainment: Television
//Entertainment: Video Games
//Entertainment: Board Games
//Science & Nature
//Science: Computers
//Science: Mathematics
//Mythology
//Sports
//Geography
//History
//Politics
//Art
//Celebrities
//Animals
//Vehicles
//Entertainment: Comics
//Science: Gadgets
//Entertainment: Japanese Anime & Manga
//Entertainment: Cartoon & Animations