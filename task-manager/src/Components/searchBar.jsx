import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {setSearchTerm} from "../actions/taskActions"

export default function searchBar(){
    const [term,setTerm]=useState('');
    const searching=useSelector((state)=>state.tasks.searching)
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        const value=e.target.value;
        setTerm(value);
        dispatch(setSearchTerm(value));
    }

    return(
        <div className="search-bar">
      <input
        type="text"
        value={term}
        onChange={handleChange}
        placeholder="Search tasks…"
      />
      {searching && <span className="searching-indicator">searching…</span>}
    </div>
    )
}
