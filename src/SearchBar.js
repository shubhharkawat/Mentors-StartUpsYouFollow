import React from 'react'
import './SearchBar.css'
import { BiSearchAlt } from "react-icons/bi";
function SearchBar() {
    return (
        <div className="SearchBar">
            
            <div className="SearchIcon">
                <div><BiSearchAlt size={26} /></div>
                               
            </div>
            <input type="text" className="" width="80px" height="40px"></input>
            <div className="Search"> <div>Search </div></div>

        </div>
    )
}

export default SearchBar
