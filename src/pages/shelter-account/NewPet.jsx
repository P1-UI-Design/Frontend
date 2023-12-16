import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import './style.css'
function NewPet({ token }) {
    const [petData, setPetData] = useState({
        name: '',
        breed: '',
        age: 0,
        size: '',
        color: '',
        gender: '',
        sterilized: false,
        description: '',
        status: '',
        traits: '',
        special_needs: ''
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setPetData({
            ...petData,
            [name]: type === 'checkbox' ? checked : value
        });
    };
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/pets/', petData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            alert('New pet added successfully!');
            navigate('/shelter/account')
            // Optionally reset the form or navigate the user elsewhere
        } catch (error) {
            console.error('Error adding new pet: ', error);
            alert('Failed to add the pet.');
        }
    };

    return (
        <div className="new-pet-container">
            <form onSubmit={handleSubmit} className="new-pet-form">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={petData.name} onChange={handleInputChange} placeholder="Name" />

                <label htmlFor="breed">Breed</label>
                <input type="text" name="breed" id="breed" value={petData.breed} onChange={handleInputChange} placeholder="Breed" />

                <label htmlFor="age">Age</label>
                <input type="number" name="age" id="age" value={petData.age} onChange={handleInputChange} placeholder="Age" />

                <label htmlFor="size">Size</label>
                <input type="text" name="size" id="size" value={petData.size} onChange={handleInputChange} placeholder="Size" />

                <label htmlFor="color">Color</label>
                <input type="text" name="color" id="color" value={petData.color} onChange={handleInputChange} placeholder="Color" />

                <label htmlFor="gender">Gender</label>
                <input type="text" name="gender" id="gender" value={petData.gender} onChange={handleInputChange} placeholder="Gender" />

                <div className="checkbox-group">
                    <input type="checkbox" name="sterilized" id="sterilized" checked={petData.sterilized} onChange={handleInputChange} />
                    <label htmlFor="sterilized">Sterilized</label>
                </div>

                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" value={petData.description} onChange={handleInputChange} placeholder="Description"></textarea>

                <label htmlFor="status">Status</label>
                <input type="text" name="status" id="status" value={petData.status} onChange={handleInputChange} placeholder="Status" />

                <label htmlFor="traits">Traits</label>
                <input type="text" name="traits" id="traits" value={petData.traits} onChange={handleInputChange} placeholder="Traits" />

                <label htmlFor="special_needs">Special Needs</label>
                <input type="text" name="special_needs" id="special_needs" value={petData.special_needs} onChange={handleInputChange} placeholder="Special Needs" />

                <button type="submit">Add Pet</button>
            </form>
        </div>

    );
}

export default NewPet;
