import React from "react";
import './TicTacToe.css';
import { Board } from "./Board";
import {useState} from "react";

const intialBoard = ['','','','','','','','',''];

export const TicTacToe =()=>{
    const[gameState, setGameState] = useState(intialBoard);
    const[isXTurn, setIsXTurn] = useState(true);

    const onSquareClick = () =>{
        let strings = Array.from(gameState);
    }

    return(
        <div>
            <h1>Tic-Tac-Toe</h1>
            <Board gameState={gameState}/>
        </div>
    );
}