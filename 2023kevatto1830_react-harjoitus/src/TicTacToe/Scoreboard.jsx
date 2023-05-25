import React from "react";

export const Scoreboard = ({scores})=>{
    return(
        <div className="scoreboard">
            <span>X - {scores.xScore}</span>
            <span>O - {scores.oScore}</span>
        </div>
    );
}