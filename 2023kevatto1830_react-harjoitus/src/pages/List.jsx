import React from "react";
import { useState } from "react";

export const List =()=>{
    const[content, setContent] = useState([]);
    const[inputValue, setInputValue] = useState('');
    return(
        <div>
            <div>
                <form>
                    <input type="text" placeholder="Type here..." required/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    );
}