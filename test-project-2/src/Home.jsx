import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import devActions from "./reducers/devReducers";
import { useDispatch } from "react-redux";

export default function Home(){
    return(
        <>
            <Navbar />
            <h1>Developer Bios Application</h1>
        </>
    )
}