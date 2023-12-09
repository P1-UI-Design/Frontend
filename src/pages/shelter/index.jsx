import React, { useState, useEffect } from 'react';
import { ShelterInfo } from './components/shelterInfo';
import { PetsGrid } from './components/petsGrid';



const ShelterPage = () => {
    const [shelterData, setShelterData] = useState({ name: '', description: '' });
    const [pets, setPets] = useState([]);

    let requestUrl = 'http://127.0.0.1:8000/accounts/' + 1;

    // Function to handle rating submission
    const onRatingSubmit = (ratingValue) => {
        console.log('Rating submitted:', ratingValue);
    };

    // Fetching shelter information
    useEffect(() => {
        fetch(requestUrl)
            .then(response => response.json())
            .then(data => setShelterData({
                name: data.name,
                description: data.description
            }));
    }, [requestUrl]);

    // Fetching pets listing
    useEffect(() => {
        fetch(requestUrl)
            .then(response => response.json())
            .then(data => setPets(data.list));
    }, [requestUrl]);

    return (
        <div>
            <ShelterInfo
                shelterName={shelterData.name}
                shelterDescription={shelterData.description}
                onRatingSubmit={onRatingSubmit}
            />
            <PetsGrid pets={pets} />
        </div>
    );
};

export default ShelterPage;
