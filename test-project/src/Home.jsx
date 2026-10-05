import React from "react";
import DeveloperBios from "./DeveloperBios";

export default function Home(){
    return(
    <>
    <h1>Home page</h1>
    <a href="/developer-bios">developer profile</a>
    <a href="/add-developer">Add developer</a>
    {/* <DeveloperBios firstname="Kaushik" lastname="Komaravolu" dev="Python/MERN Stack" year="2023" /> */}
    </>
    )
}
