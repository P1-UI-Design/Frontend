import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pets-style.css';
import Sidebar from "./components/Sidebar";
import Cards from "./components/Cards";

function Pets({ token }) {
    const [pets, setPets] = useState([]);

    useEffect(() => {
        fetchPets({});
    }, []); // Initial fetch without filters

    const fetchPets = async (filters) => {
        const query = new URLSearchParams(filters).toString();
        try {
            const response = await axios.get(`http://127.0.0.1:8000/pets/search?${query}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setPets(response.data.results); // Adjust according to your actual API response
        } catch (error) {
            console.error('Error fetching pets:', error);
        }
    };

    return (
        <div className="pets-page">
            <div className="main-content">
                <Sidebar onSearch={fetchPets} />
                <Cards data={pets} nav={/pets/}/>
            </div>
        </div>
    );
}

export default Pets;
