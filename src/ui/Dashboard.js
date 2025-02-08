import React, { useEffect, useState } from 'react';
import Header from './Header';
import Searchbar from './Searchbar';
import Banner from './Banner';
import User from './User';
import PathCards from './PathCards';
import Paths from './Paths.json';
import Categories from './Categories.json';

function getData() {
  return Paths.map((object) => {
    const matched = Categories.find((element) => element.categoryId === object.categoryId);
    return { ...object, ...matched };
  });
}

const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(getData());
  }, 500);
});

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allCards, setAllCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const handleSearch = (query) => {
    setSearchQuery(query);


    const filtered = allCards.filter((card) => {
      return card.title.toLocaleLowerCase().includes(query) || card.author.toLocaleLowerCase().includes(query);
    });
    setFilteredCards(filtered);
  };

  useEffect(() => {
    apiCall.then(response => {
      setAllCards(response);
      setFilteredCards(allCards);
    })
  }, [allCards]);

  return (
    <div className="Dashboard">
      <Header Text="Dashboard" />
      <Searchbar onSearch={(handleSearch)} value={searchQuery} />
      <Banner />
      <User />
      <PathCards Title="Recently Added" filteredCards={filteredCards} />
    </div>
  );
}
