import React from 'react';

export default function Searchbar({ onSearch, value }) {
    const handleSearch = (event) => {
        onSearch(event.target.value);  // Directly call the onSearch function passed as a prop
    };

    return (
        <div className="Searchbar">
            <input
                className="search"
                type="text"
                placeholder="Search..."
                value={value}  // Bind the input's value to the searchQuery state from PathCards
                onChange={handleSearch}  // Trigger handleSearch on input change
            />
        </div>
    );
}
