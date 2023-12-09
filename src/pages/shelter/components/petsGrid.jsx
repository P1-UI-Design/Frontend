import React from 'react';
export { PetsGrid };

const handleAdoptionApplication = (petId) => {
    // Example: Navigate to an adoption application form page
    // You can adjust this to match your application's routing and logic
    window.location.href = `/adopt/${petId}`;
};

const PetBox = ({ pet }) => {
    return (
        <div className="pet-box">
            <img src={pet.profilePicture} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.description}</p>
            <button onClick={() => handleAdoptionApplication(pet.id)}>
                Apply for this Pet
            </button>
        </div>
    );
};

const PetsGrid = ({ pets }) => {
    return (
        <div className="pets-grid">
            {pets.map(pet => <PetBox key={pet.id} pet={pet} />)}
        </div>
    );
};
