import React, { useState } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Banner from './Banner';
import User from './User';
import PathCards from './PathCards';
import Paths from './Paths.json';
import Categories from './Categories.json';

// Fetch data from Paths and Categories
function getData() {
  return Paths.map((object) => {
    const matched = Categories.find((element) => element.categoryId === object.categoryId);
    return { ...object, ...matched };
  });
}

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  // const [filteredCards, setFilteredCards] = useState(getData()); // State for filtered cards
  const [allCards] = useState(getData()); // State for filtered cards
  const [filteredCards, setFilteredCards] = useState(); // State for filtered cards



  const handleSearch = (query) => {
    setSearchQuery(query); // Update search query

    // Filter cards based on search query (matches at the beginning of words)
    const filtered = allCards.filter((card) => {
      return card.title.toLocaleLowerCase().includes(query) ||
        card.author.toLocaleLowerCase().includes(query)


      // const { title, author } = card;
      // const queryLower = query.toLowerCase();

      // // Use regex to match the beginning of words
      // const startsWithQuery = (text) => {
      //   const regex = new RegExp(`\\b${queryLower}`, 'i'); // Match at the beginning of each word (case-insensitive)
      //   return regex.test(text.toLowerCase());
      // };

      // return (
      //   startsWithQuery(title) ||
      //   startsWithQuery(author)
      // );
    });

    setFilteredCards(filtered); // Set filtered cards
  };

  // Handle the search input and filter cards
  // const handleSearch = (query) => {
  //   setSearchQuery(query); // Update search query

  //   // Filter cards based on search query (matches at the beginning of words)
  //   const filtered = getData().filter((card) => {
  //     const { title, author } = card;
  //     const queryLower = query.toLowerCase();

  //     // Use regex to match the beginning of words
  //     const startsWithQuery = (text) => {
  //       const regex = new RegExp(`\\b${queryLower}`, 'i'); // Match at the beginning of each word (case-insensitive)
  //       return regex.test(text.toLowerCase());
  //     };

  //     return (
  //       startsWithQuery(title) ||
  //       startsWithQuery(author)
  //     );
  //   });

  //   setFilteredCards(filtered); // Set filtered cards
  // };

  return (
    <div className="Dashboard">
      <Header Text="Dashboard" />
      {/* Pass the state and handler down as props */}
      <Searchbar onSearch={handleSearch} value={searchQuery} />
      <Banner />
      <User />
      <PathCards Title="Recently Added" filteredCards={filteredCards} />
    </div>
  );
}
