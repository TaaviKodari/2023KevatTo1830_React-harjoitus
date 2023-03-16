import React from "react";
import { Item } from "./Item";
import { items } from "./ItemDatabase";

export const Items =()=>{
    return(
        <div>
            {
                items.map(({title, img})=>
                <Item 
                    title={title}
                    img={img}
                />
                )
            }
        </div>
    )
}