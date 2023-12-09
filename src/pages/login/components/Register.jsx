import React, { useState } from "react";
import "./AuthFormStyles.css";
import axios from "axios";

const Register = ({ setShowLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setConfirmPassword] = useState('');

    const handleRegister = async (event, role) => {
        event.preventDefault();
        const registrationPayload = {
            username,
            email,
            password,
            password2,
            role,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/accounts/', registrationPayload);
            setShowLogin(true);
        } catch (error) {
            alert("error");
        }
    };

    return (
        <form className="auth-form">
            <h2>Register</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <label>Confirm Password:</label>
                <input
                    type="password"
                    value={password2}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </div>
            <button type="submit" onClick={(e) => handleRegister(e, 'seeker')}>Seeker Register</button>
            <button type="submit" onClick={(e) => handleRegister(e, 'shelter')}>Shelter Register</button>
        </form>
    );
};

export default Register;
