import React from 'react'
import Dashboard from './icons/Dashboard'
import Library from './icons/Library'
import Paths from './icons/Paths'

export default function Menu() {
  return (
    <div className="Menu" id="menu">
      <div className="item">
        <Dashboard />
        Dashboard
      </div>
      <div className="item">
        <Library />
        Library
      </div>
      <div className="item">
        <Paths />
        My Paths
      </div>
    </div>
  )
}
