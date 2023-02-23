import React from "react";
import {Outlet, Link} from "react-router-dom";

export const Router = () =>{
    return(
        <>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Buttons">Buttons</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
}