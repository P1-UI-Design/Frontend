import React from 'react';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/pets">Pets</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;