import React from "react";
import "./NavBar.css"

const NavBar =() => {
    return(
        <div className="navbar">
            <span className="nav-logo">FootballApp</span>
            <div className="nav-items">
                <a href="/">Home</a>
                <a href="/players">Players</a>
                <a href="/coaches">Coaches</a>
                <a href="/teams">Teams</a>
            </div>
            <div className="nav-toggle">
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default NavBar