import React from 'react'
import Header from './Header'
import Searchbar from './Searchbar'
import Banner from './Banner'
import User from './User'
import Cards from './Cards'

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Header />
      <Searchbar />
      <Banner />
      <User />
      <Cards />
    </div>
  )
}
