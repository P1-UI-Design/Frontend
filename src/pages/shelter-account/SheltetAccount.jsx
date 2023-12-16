import React, { useState, useEffect } from "react";
import axios from 'axios';
import './style.css';
import Cards from "../pets/components/Cards";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

function ShelterAccount({token}) {
    const [Id, setId] = useState("");
    const [applications, setApplications] = useState([]);
    const [pets, setPets] = useState([]);

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
        const fetchCurrentUserId = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/accounts/current_user_id/', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                const userId = response.data.user_id;
                setId(userId);
                fetchAccountDetails(userId);
                fetchPets(userId);
            } catch (error) {
                console.error('Error fetching user ID: ', error);
                // Handle error here
            }
        };

        const fetchAccountDetails = async (userId) => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/accounts/${userId}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching account details: ', error);
                // Handle error here
            }
        };

        const fetchPets = async (userId) => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/pets/search', {
                    params: { user_id: userId, status: "all" },
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPets(response.data.results); // Assuming 'results' contains the array of pets
            } catch (error) {
                console.error('Error fetching pets:', error);
            }
        };

        if (token) {
            fetchCurrentUserId();
        }
    }, [token]);


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
    const navigate = useNavigate();

    const handleAddPetClick = () => {
        navigate('/newpet');
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
                        <p>{userData.description || "N/A"}</p>
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

            <div className="pets-container">
                <h2>Pets</h2>
                <button onClick={handleAddPetClick}>Add</button>
                <Cards data={pets} nav={"/shelter/pets/"}/>
            </div>
        </>
    );
}

export default ShelterAccount;
