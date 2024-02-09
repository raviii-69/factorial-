// @ts-nocheck
import {link, NavLink } from "react-router-dom";

export const Header = () =>{
    return(
        <>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="state">UseState</NavLink>
                </li>

            </ul>
        </>

        
    )
}
 