import React, { useState } from 'react';

function Sidebar({ onSearch }) {
    const [status, setStatus] = useState('all');
    const [shelter, setUserId] = useState('');
    const [age_min, setAgeMin] = useState('');
    const [age_max, setAgeMax] = useState('');
    const [gender, setGender] = useState('');

    const handleSearch = () => {
        onSearch({ status, shelter, age_min, age_max, gender });
    };


    return (
        <div className="sidebar">
            <div className="search-options">
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="available">Available</option>
                    <option value="adopted">Adopted</option>
                </select>

                <label>User ID (Shelter):</label>
                <input type="text" value={shelter} onChange={(e) => setUserId(e.target.value)} placeholder="Shelter ID" />

                <label>Minimum Age:</label>
                <input type="number" value={age_min} onChange={(e) => setAgeMin(e.target.value)} placeholder="Min Age" />

                <label>Maximum Age:</label>
                <input type="number" value={age_max} onChange={(e) => setAgeMax(e.target.value)} placeholder="Max Age" />

                <label>Gender:</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Any</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div className="filter-options">
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default Sidebar;