import SlideShow from "./SlideShow";

function Info(){
    const pet = {
        "id": 2,
        "name": "Test Pet2",
        "breed": "b",
        "age": 1,
        "size": "small",
        "color": "brown",
        "gender": "female",
        "sterilized": true,
        "description": "A friendly and playful pet",
        "status": "available",
        "publication_date": "2023-11-25T13:30:21.609840Z",
        "traits": "loyal, energetic",
        "special_needs": "none",
        "shelter": 3
    };

    return (
        <div className="profile-container">
            <div className="profile-header">
                <h1 className="profile-name">{pet.name}</h1>
            </div>
            <div className="profile-info">
                <p>Breed: {pet.breed}</p>
                <p>Age: {pet.age} years</p>
                <p>Size: {pet.size}</p>
                <p>Color: {pet.color}</p>
                <p>Gender: {pet.gender}</p>
                <p>Sterilized: {pet.sterilized ? 'Yes' : 'No'}</p>
                <p>Description: {pet.description}</p>
                <p>Status: {pet.status}</p>
                <p>Publication Date: {new Date(pet.publication_date).toLocaleString()}</p>
                <p>Traits: {pet.traits}</p>
                <p>Special Needs: {pet.special_needs}</p>
                <p>Shelter ID: {pet.shelter}</p>
            </div>
        </div>
    );
}

export default Info;