import React, { useEffect, useState } from "react";
import { Navigate,useNavigate } from "react-router-dom";

export default function AddDeveloper(){
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [dev,setDev]=useState('');
    const [year,setYear]=useState(null);
    const [isValidForm,setIsValidForm]=useState(false);
    const [isDirtyForm,setIsDirtyForm]=useState(false);
    const navigate=useNavigate();
    const handleSubmit=()=>{
        navigate("/developer-bios");
    }
    useEffect(()=>{
        let validFirstName= firstName? true: false;
        let validLastName= lastName? true: false;
        let validDev= dev? true: false;
        let validYear=year? true: false;

        let isValid= validFirstName && validLastName && validDev && validYear;
        let isDirty= !validFirstName || !validLastName || !validDev || !validYear;
        setIsValidForm(isValid);
        setIsDirtyForm(isDirty);
    },[firstName,lastName,dev,year]);

    return(
        <>
        <h1>Add Developer</h1><br></br>
        <form>
            <label>First Name:</label><br />
            <input type="text" id="firstName" placeholder="Enter your first name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/><br />
            <label>Last Name:</label><br />
            <input type="text" id="lastName" placeholder="Enter your last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/><br />
            <label>favourite development language:</label><br />
            <input type="text" id="devLang" placeholder="Enter your favourite development language" value={dev} onChange={(e)=>setDev(e.target.value)}/><br />
            <label>Year:</label><br />
            <input type="text" id="year" placeholder="Enter the year" value={year} onChange={(e)=>setYear(e.target.value)}/><br />
            <input type="submit" disabled={!isValidForm} id="submit" value="submit" onClick={handleSubmit} />
        </form>
        </>
    )
}