import React from "react";
import { useSelector } from "react-redux";

export default function DisplayBios(){
    // state here is the whole Redux state — { developers: [...] }
    const developers = useSelector((state) => state.developers);

    return(
        <div>
            <h1><b>Developer Profiles:</b></h1><br/>
            {developers.length === 0 && <p>No developers added yet.</p>}

            {developers.map((developer, index) => (
                <div key={index}>
                    <p><b>First Name:</b> {developer.firstName}</p>
                    <p><b>Last Name:</b> {developer.lastName}</p>
                    <p><b>Favourite Development Language:</b> {developer.dev}</p>
                    <p><b>Year Started:</b> {developer.year}</p>
                    <hr />
                </div>
            ))}
        </div>
    )
}