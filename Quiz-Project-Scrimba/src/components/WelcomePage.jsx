import React from "react";

export default function WelcomePage(props) {
    return (
    <div>
        <h1>Start the game</h1>
        <button onClick={props.startGame}>Start Game</button>
    </div>
    )
}