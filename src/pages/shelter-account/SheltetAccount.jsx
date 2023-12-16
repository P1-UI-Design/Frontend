import React, { useState, useEffect } from "react";
import axios from 'axios';
import './style.css';

function ShelterAccount({token}) {
    const [Id, setId] = useState("");
    const [applications, setApplications] = useState([]);

    const [userData, setUserData] = useState({
        username: '',
        description: '',
        email: '',
        phone: '',
        address: '',
        avatar: '',
    });

    // States for managing edit mode and new values
    const [editMode, setEditMode] = useState({
        description: false,
        email: false,
        phone: false,
        address: false,
        password: false,
    });
    const [newValues, setNewValues] = useState({
        description: '',
        email: '',
        phone: '',
        address: '',
        password: '',
        confirmPassword: '',
    });

    const handleAvatarChange = async (event) => {
        const file = event.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('avatar', file);

            try {
                const response = await axios.patch(`http://127.0.0.1:8000/accounts/${userData.id}/`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });

                setUserData({ ...userData, avatar: response.data.avatar });
            } catch (error) {
                console.error('Error updating avatar: ', error);
                // Handle error here
            }
        }
    };

    const triggerFileSelectPopup = () => {
        document.getElementById("avatarInput").click();
    };


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
                setId(userId);
                fetchAccountDetails(userId);
                fetchApplications(userId);
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

        const fetchApplications = async (userId) => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/applications/', {
                    params: { id: userId} // Assuming you are sending the user ID as a query parameter
                });
                if (response.data.code === 200) {
                    setApplications(response.data.data.list);
                } else {
                    // Handle any non-200 responses here
                    console.error('Failed to fetch applications:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching applications:', error);
            }
        };

        if (token) {
            fetchCurrentUserId();
        }
    }, [token]); // Dependency array ensures useEffect runs when token changes

    const handleEdit = (field) => {
        setEditMode({ ...editMode, [field]: true });
        setNewValues({ ...newValues, [field]: userData[field] || '' });
    };

    const handleValueChange = (field, value) => {
        setNewValues({ ...newValues, [field]: value });
    };

    const saveField = async (field) => {
        try {
            await axios.patch(`http://127.0.0.1:8000/accounts/${userData.id}/`, {
                [field]: newValues[field],
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setUserData({ ...userData, [field]: newValues[field] });
            setEditMode({ ...editMode, [field]: false });
        } catch (error) {
            console.error(`Error updating ${field}: `, error);
            // Handle error here
        }
    };

    const savePassword = async () => {
        if (newValues.password !== newValues.confirmPassword) {
            console.error('Passwords do not match.');
            return; // Optionally, show an error message to the user
        }

        try {
            await axios.patch(`http://127.0.0.1:8000/accounts/${userData.id}/`, {
                password: newValues.password,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            setEditMode({ ...editMode, password: false });
        } catch (error) {
            console.error('Error updating password: ', error);
            // Handle error here
        }
    };


    return (
        <>
            <div className="profile2-container">
                <div className="profile2-header">
                    <div className="profile-picture">
                        <img src={"http://127.0.0.1:8000/accounts" + userData.avatar || "path_to_default_image"} alt="Profile" />
                    </div>
                    <div className="profile-info">
                        <h1>{userData.username || "N/A"}</h1>
                        <p>{userData.role || "N/A"}</p>
                        <p>{userData.location || "N/A"}</p>
                        <button onClick={triggerFileSelectPopup}>Upload Avatar</button>
                    </div>
                </div>
                <div className="profile-body">
                    <div className="profile-details">
                        {/* Repeat the following pattern for each field */}
                        {["description", "email", "phone", "address"].map(field => (
                            <div className="detail" key={field}>
                                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                                {editMode[field] ? (
                                    <>
                                        <input
                                            type={field === 'email' ? 'email' : 'text'}
                                            value={newValues[field]}
                                            onChange={(e) => handleValueChange(field, e.target.value)}
                                        />
                                        <button onClick={() => saveField(field)}>Save</button>
                                    </>
                                ) : (
                                    <>
                                        <div className="value">{userData[field] || "N/A"}</div>
                                        <button onClick={() => handleEdit(field)}>Edit</button>
                                    </>
                                )}
                            </div>
                        ))}

                        <div className="detail">
                            <label>Password</label>
                            {editMode.password ? (
                                <>
                                    <input
                                        type="password"
                                        placeholder="New Password"
                                        value={newValues.password}
                                        onChange={(e) => handleValueChange('password', e.target.value)}
                                    />
                                    <input
                                        type="password"
                                        placeholder="Confirm New Password"
                                        value={newValues.confirmPassword}
                                        onChange={(e) => handleValueChange('confirmPassword', e.target.value)}
                                    />
                                    <button onClick={savePassword}>Save</button>
                                </>
                            ) : (
                                <>
                                    <div className="value">************</div>
                                    <button onClick={() => handleEdit('password')}>Edit</button>
                                </>
                            )}
                        </div>

                    </div>
                </div>
                <input type="file" onChange={handleAvatarChange} style={{ display: 'none' }} id="avatarInput" />
            </div>
            <div className="applications-container">
                <h2>Applications</h2>
                {applications.map(app => (
                    <div key={app.id} className="application-card">
                        <h3>Application {app.id}</h3>
                        <p><strong>Target Pet</strong><br />{app.pet}</p>
                        <p><strong>Reason for Adoption</strong><br />{app.reason_for_adopting}</p>
                        <p><strong>Status</strong><br /><span className={`status ${app.approval_status.toLowerCase()}`}>{app.approval_status}</span></p>
                        <button>Contact Shelter</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ShelterAccount;
