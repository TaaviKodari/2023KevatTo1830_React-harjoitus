import React from "react";
import { useState } from "react";


export const List =()=>{
    const[content, setContent] = useState([]);
    const[inputValue, setInputValue] = useState('');
    function clearList(){
        setContent([]);
    }
    return(
        <div>
            <div>
                <form onSubmit={(event)=>{
                    event.preventDefault()
                    const temp =[inputValue,...content];
                    setContent(temp);
                    setInputValue('');
                }}>
                   
                  <input type="text" 
                     placeholder="Type here..." 
                     value={inputValue}
                     onChange={e=>setInputValue(e.target.value)}
                     required/> 
                   <input type="submit" value="Submit"/>
                    {
                        content.map((item)=>(
                            <ul>
                                <li>
                                    <h2>{item}</h2>
                                </li>
                            </ul>
                        ))
                    }
                </form>
                <button onClick={clearList}>Clear List</button>
            </div>
        </div>
    );
}