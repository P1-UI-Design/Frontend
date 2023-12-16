import React, { useState, useEffect } from "react";
import axios from 'axios';
import './style.css';

function Account({token}) {
    const [userData, setUserData] = useState({
        username: '',
        description: '',
        email: '',
        phone: '',
        address: '',
        // ... other fields you might have
    });

    useEffect(() => {
        // Fetch the current user ID
        const fetchCurrentUserId = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/accounts/current_user_id/', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use the token from props
                    }
                });
                const userId = response.data.user_id;
                fetchAccountDetails(userId);
            } catch (error) {
                console.error('Error fetching user ID: ', error);
                // Handle error here
            }
        };

        // Fetch the account details using the user ID
        const fetchAccountDetails = async (userId) => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/accounts/${userId}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // Use the token from props
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching account details: ', error);
                // Handle error here
            }
        };

        if (token) {
            fetchCurrentUserId();
        }
    }, [token]); // Dependency array ensures useEffect runs when token changes

    return (
        <>
            <div className="profile2-container">
                <div className="profile2-header">
                    <div className="profile-picture">
                        {/* Update the source for the profile picture */}
                        <img src={userData.avatar || "path_to_default_image"} alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <h1>{userData.username || "John Doe"}</h1>
                        <p>{userData.role || "User Role"}</p>
                        <p>{userData.location || "User Location"}</p>
                        <button>Edit</button>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-details">
                        <div className="detail">
                            <label>Description</label>
                            <div className="value">{userData.description || "User Description"}</div>
                            <button>Edit</button>
                        </div>
                        <div className="detail">
                            <label>Password</label>
                            <div className="value">************</div>
                            <button>Edit</button>
                        </div>
                        <div className="detail">
                            <label>Email</label>
                            <div className="value">{userData.email || "User Email"}</div>
                            <button>Edit</button>
                        </div>
                        <div className="detail">
                            <label>Telephone</label>
                            <div className="value">{userData.phone || "(123)456-7890"}</div>
                            <button>Edit</button>
                        </div>
                        <div className="detail">
                            <label>Address</label>
                            <div className="value">{userData.address || "User Address"}</div>
                            <button>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Account;
