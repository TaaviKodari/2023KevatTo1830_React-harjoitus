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
                    <li>
                        <Link to="/Counters">Counters</Link>
                    </li>
                    <li>
                        <Link to="/Items">Items</Link>
                    </li>
                    <li>
                        <Link to="/List">List</Link>
                    </li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
}