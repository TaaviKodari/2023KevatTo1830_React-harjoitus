import React from "react";

export const Item=(props)=>{
    return(
        <div>
            <p>Title:{props.title}</p>
            <img src={props.img}/>
        </div>
    );
}