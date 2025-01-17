import React from 'react'
import Header from './Header'
import Searchbar from './Searchbar'
import Banner from './Banner'
import User from './User'
import PathCards from './PathCards'

export default function Dashboard() {
  return (
    <div className="Dashboard">
      <Header Text="Dashboard" />
      <Searchbar />
      <Banner />
      <User />
      <PathCards Title="Recently Added" />
    </div>
  )
}
