// Sidebar.jsx
import React from 'react';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="search-bar">
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </div>
            <div className="search-options">
            </div>
            <div className="filter-options">
            </div>
        </div>
    );
}

export default Sidebar;
