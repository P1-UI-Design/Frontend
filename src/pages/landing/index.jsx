import React from 'react';
import './css/main.css';
import logo from './media/welcome.svg'

function Landing() {
    return (
        <div className="main-container">
            <img src={logo} alt="Logo" className="welcome-logo"/>
            <h1 className="main-heading">Welcome to Petpal!</h1>
            <a href="/login" className="btn login-button">Explore</a>
        </div>
    );
}

export default Landing;
