import SlideShow from "./SlideShow";

function Info(pet){
    console.log("ajsnjdsndd")
    console.log(pet.pet)
    const pet2 = {
        "id": 2,
        "name": "what",
        "breed": "ajsmd",
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
                <p>Breed: {pet.pet.breed}</p>
                <p>Age: {pet.pet.age} years</p>
                <p>Size: {pet.pet.size}</p>
                <p>Color: {pet.pet.color}</p>
                <p>Gender: {pet.pet.gender}</p>
                <p>Sterilized: {pet.pet.sterilized ? 'Yes' : 'No'}</p>
                <p>Description: {pet.pet.description}</p>
                <p>Status: {pet.pet.status}</p>
                <p>Publication Date: {new Date(pet.pet.publication_date).toLocaleString()}</p>
                <p>Traits: {pet.pet.traits}</p>
                <p>Special Needs: {pet.pet.special_needs}</p>
                <p>Shelter ID: {pet.pet.shelter}</p>
            </div>
        </div>
    );
}

export default Info;