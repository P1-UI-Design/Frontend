import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pets-style.css';
import Cards from "../pets/components/Cards";

function Favorite({ token, Id}) {
    const [pets, setPets] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavoritePets = async () => {
            try {
                setIsLoading(true);
                const response = await axios.get('http://127.0.0.1:8000/pets/get_fav/' + Id.toString(), {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setPets(response.data.favorites); // Adjust according to your actual API response structure
                setIsLoading(false);
            } catch (err) {
                console.error("Error fetching favorite pets:", err);
                setError(err);
                setIsLoading(false);
            }
        };

        fetchFavoritePets();
    }, [token]);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading favorite pets.</div>;

    return (
        <div className="pets-page">
            <div className="main-content">
                <Cards data={pets} nav={"/pets/"} />
            </div>
        </div>
    );
}

export default Favorite;
