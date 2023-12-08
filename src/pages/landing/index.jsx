import React from 'react';
import './css/main.css';
import logo from './media/welcome.svg'

function Landing() {
    return (
        <div className="main-container">
            <img src={logo} alt="Logo" className="welcome-logo"/>
            <h1 className="main-heading">Welcome to our Dog camp!</h1>
            <a href="/login" className="btn login-button">Become a dog eater</a>
        </div>
    );
}

export default Landing;
