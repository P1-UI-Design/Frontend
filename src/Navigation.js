import React from 'react';
import {BrowserRouter, Link, Route, Routes, useLocation} from 'react-router-dom';

function Nav() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/login' ? 'active' : ''}`}>
                    <Link to="/login">Login</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/pets' ? 'active' : ''}`}>
                    <Link to="/pets">Pets</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/account' ? 'active' : ''}`}>
                    <Link to="/account">Account</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/shelter' ? 'active' : ''}`}>
                    <Link to="/shelter">Shelter</Link>
                </li>
                <li className={`nav-item ${location.pathname === '/notification' ? 'active' : ''}`}>
                    <Link to="/notification">Notification</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;