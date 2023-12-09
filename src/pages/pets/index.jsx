import React from 'react';
import './style.css';
import Cards from "./components/Cards";
import SideBar from "./components/Sidebar"
function Pets() {
    const petsData = [
        {
            id: 1,
            title: 'Pet 1',
            description: 'Description for Pet 1',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            title: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            title: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            title: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            title: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
        {
            id: 2,
            title: 'Pet 2',
            description: 'Description for Pet 2',
            imageUrl: 'https://placekitten.com/300/200',
        },
    ];

    return (
        <div className="pets-page">
            <div className="main-content">
                <Cards data={petsData} />
                <SideBar/>
            </div>
        </div>
    );
}

export default Pets;