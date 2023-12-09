import React, { useState } from "react";
import "./AuthFormStyles.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        const loginPayload = {
            username,
            password,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/accounts/login/', loginPayload);
            const accessToken = response.data.access;
            localStorage.setItem('accessToken', accessToken);
            navigate("/pets");
        } catch (error) {
            alert("bruh, username or pass is wrong");
        }
    };

    return (
        <form onSubmit={handleLogin} className="auth-form">
            <h2>Login</h2>
            <div>
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;