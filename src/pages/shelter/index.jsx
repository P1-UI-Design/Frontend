import React from 'react';

const ShelterPage = ({ shelterInfo, petsList }) => {
    const handleRatingSubmit = (rating) => {
        // Placeholder function to handle rating submission
        console.log('Rating submitted:', rating);
    };

    const applyForPet = (petId) => {
        // Placeholder function for applying for a pet
        console.log('Apply for pet:', petId);
    };

    return (
        <div className="shelter-page">
            <section className="shelter-info">
                <div className="shelter-name">{shelterInfo.name}</div>
                <div className="shelter-rating">
                    {/* Implement your rating system here */}
                    <input type="number" onChange={(e) => handleRatingSubmit(e.target.value)} />
                </div>
                <div className="shelter-description">{shelterInfo.description}</div>
            </section>

            <section className="pet-list">
                {petsList.map(pet => (
                    <div key={pet.id} className="pet-box">
                        <img src={pet.profilePicture} alt={pet.name} />
                        <div className="pet-name">{pet.name}</div>
                        <div className="pet-description">{pet.description}</div>
                        <button onClick={() => applyForPet(pet.id)}>Apply for this Pet</button>
                    </div>
                ))}
            </section>
        </div>
    );
};

export default ShelterPage;
