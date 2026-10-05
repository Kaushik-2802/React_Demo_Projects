import React from "react";
import './Navbar.css'

export default function Navbar(){
    return(
        <>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="display-bios/">developer BIOS</a></li>
                <li><a href="/Add-developer">Add Developer</a></li>
            </ul>
        </>
    )
}