import React from "react";

export default function DeveloperBios(props){
    return(
        <div>
            <h1><b>Developer Profile:</b></h1><br></br>
            <p><b>First Name:</b>
             {props.firstname}</p><br></br>
            <p><b>Last Name:</b>
              {props.lastname}</p><br></br>
            <p><b>Favourite Development Language:</b>
             {props.dev}</p>
            <br></br>
            <p><b>Year Started:</b>
             {props.year}</p>
        </div>
    )
}