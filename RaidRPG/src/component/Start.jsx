import React from "react";


export default function Start(props){
    return (
        <div>
            <h1>Start Game</h1>
            <button onClick={props.startGame}>Start Game!</button>
        </div>
    )
}