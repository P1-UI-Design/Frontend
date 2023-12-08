import React from 'react';
import { Link } from 'react-router-dom';
import './css/main.css';

const NotFoundPage = () => (
    <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>We can't seem to find the page you're looking for.</p>
        <Link to="/" className="home-link">Go back home</Link>
    </div>
);

export default NotFoundPage;

