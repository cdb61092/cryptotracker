import React from "react";
import SearchBar from "./SearchBar";

const headerStyle = {
    fontSize: '50px',
    padding: '10px 0px',
}

const containerStyle = {
    backgroundColor: 'lightblue',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '5px solid black'
}


function Header(){
    return (
        <div style={containerStyle}>
            <span style={headerStyle}>CryptoTracker</span>
            <SearchBar></SearchBar>
        </div>
    )
}

export default Header;