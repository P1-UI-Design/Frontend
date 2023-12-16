import React, { useState } from "react";
import "./AuthFormStyles.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = ({ setToken, setId }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        const loginPayload = { username, password };

        try {
            const response = await axios.post('http://127.0.0.1:8000/accounts/login/', loginPayload);
            const accessToken = response.data.access;
            localStorage.setItem('accessToken', accessToken);
            setToken(accessToken); // Setting the token in state and local storage

            const userResponse = await fetchAccountDetails(accessToken);
            setId(userResponse.data.id); // Setting the user ID
            navigateBasedOnRole(userResponse.data.role);
        } catch (error) {
            console.error("Login failed:", error);
            alert("Incorrect username or password");
        }
    };

    const fetchAccountDetails = async (token) => {
        try {
            const userIdResponse = await axios.get('http://127.0.0.1:8000/accounts/current_user_id/', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const userId = userIdResponse.data.user_id;
            return await axios.get(`http://127.0.0.1:8000/accounts/${userId}/`, {
                headers: { Authorization: `Bearer ${token}` },
            });
        } catch (error) {
            console.error('Error fetching account details: ', error);
            throw error; // Rethrow the error to be handled in the calling function
        }
    };

    const navigateBasedOnRole = (role) => {
        if (role === "shelter") {
            navigate("/shelter/account");
        } else {
            navigate("/pets");
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
