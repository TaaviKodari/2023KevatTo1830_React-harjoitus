import React from "react";
import { Item } from "./Item";
import { items } from "./ItemDatabase";

export const Items =()=>{
    return(
        <div>
            {
                items.map(({title, img, description})=>
                <Item 
                    title={title}
                    img={img}
                    description={description}

                />
                )
            }
        </div>
    )
}