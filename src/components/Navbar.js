import React from "react"
import logo from '../logo.svg';

export default function Navbar(props){
    return (
        <nav
            className={props.darkMode ? "navDark": "navLight"}
        >
            <img src="logo192.png" width="50px" height="50px" className="nav-icon"/>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h3 className="nav-logo-text">ReactFacts</h3>
            <div
                className="toggler"
            >
                <p className="toggler-light">Light</p>
                <div
                    className="toggler-slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler-slider-circle"></div>
                </div>
                <p className="toggler-dark">Dark</p>
            </div>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav> 
    ) 
}