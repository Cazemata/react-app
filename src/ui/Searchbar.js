import React from 'react';

export default function Searchbar({ onSearch, value }) {
    const handleSearch = (event) => {
        onSearch(event.target.value);
    };

    return (
        <div className="Searchbar">
            <input
                className="search"
                type="text"
                placeholder="Search..."
                value={value}
                onChange={handleSearch}
            />
        </div>
    );
}
