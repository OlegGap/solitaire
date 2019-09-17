
import React, { Component } from 'react'
import './styles.css';
class App extends Component {
    stata = {
    }
    render() {
        return (
            <section className="menu-wrapper">
                <div className="menu-container">
                    <div className="menu-item menu__news">Newss</div>
                    <div className="menu-item menu__coins">Coins</div>
                    <div className="menu-item menu__validators">Validators</div>
                    <div className="menu-item menu__portfolio">Portfolio</div>
                </div>
                <div className="menu-container__mark">
                    <div className="menu-mark__news"></div>
                    <div className="menu-mark__coins"></div>
                    <div className="menu-mark__validators"></div>
                    <div className="menu-mark__portfolio"></div>
                </div>
            </section>
        )
    }
}

export default App;