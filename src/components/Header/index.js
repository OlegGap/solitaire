import React, { Component } from 'react'
import './styles.css';
import imgLogo from "./images/logo.svg";
import imgTriangle from "./images/icon-triangle.svg"
import imgSun from "./images/icon-sun.svg";
import imgSearch from "./images/icon-search.svg";
class App extends Component {
    stata = {
        isDay: true,
        currentLeangiage: 'rus'
    }
//TODO: Add show menu lenguages, theme day/night, search, signIn
    render() {
        return (
            <section className="header-wrapper">
                <div className="header-container">
                    <div className="header-logo">
                        <img className="header-imgLogo" src={imgLogo} alt="logo"></img>
                    </div>
                    <div className="header-lenguages" >Rus<img src={imgTriangle} className="header-lenguages-triangle"></img></div>
                    <div className="header-timeIsDay"> <img className="header-imgSun" src={imgSun} alt="sun"></img></div>
                    <div className="header-search"> <img className="header-imgSearch" src={imgSearch} alt="search"></img></div>
                    <div className="header-signUp">Sign Up</div>
                </div>
            </section>
        )
    }
}

export default App;