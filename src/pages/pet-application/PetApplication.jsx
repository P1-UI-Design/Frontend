import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import {useNavigate} from "react-router-dom"; // Make sure to create a corresponding CSS file

function PetApplication({Id}) {
    const urlSegments = window.location.href.split("/")
    const navigate = useNavigate();

    // State hooks for each form field
    const [pet, setPet] = useState(urlSegments[urlSegments.indexOf("pets") + 1]);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [reasonForAdopting, setReasonForAdopting] = useState('');

    // Function to handle form submission
    const handleSubmit = async () => {

        const payload = {
            user: Id, // Assuming this is a fixed value or retrieved from some state/context
            pet: pet, // This should also be dynamic based on the pet in question
            type: "seeker", // Assuming this is fixed for this use case
            name: name,
            address: address,
            phone_number: phoneNumber,
            reason_for_adopting: reasonForAdopting,
        };

        try {
            const response = await axios.post('http://127.0.0.1:8000/applications/', payload);
            console.log(response.data);
            alert("application sent successfully")
            navigate("/pets");
            // Handle successful submission, maybe clear the form or show a success message
        } catch (error) {
            console.error('Error submitting application:', error);
            // Handle errors, maybe display an error message to the user
        }
    };

    return (
        <div className="pet-application-container">
            <h1>Your Adoption Application</h1>
            <div className="application-details">
                <div className="application-field">
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="application-field">
                    <label htmlFor="address">Address</label>
                    <input
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                </div>
                <div className="application-field">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="application-field">
                    <label htmlFor="reasonForAdopting">Reason for Adopting</label>
                    <textarea
                        id="reasonForAdopting"
                        value={reasonForAdopting}
                        onChange={(e) => setReasonForAdopting(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>Send Application</button>
            </div>
        </div>
    );
}

export default PetApplication;
