import React, { useState } from 'react'
import Dashboard from './icons/Dashboard'
import Library from './icons/Library'
import Paths from './icons/Paths'

export default function Menu() {
  const [hover, setHover] = useState(false);
  return (
    <div className="Menu">
      <div className={`item ${hover ? "active" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Dashboard />
        Dashboard
      </div>
      <div className={`item ${hover ? "active" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Library />
        Library
      </div>
      <div className={`item ${hover ? "active" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Paths />
        My Paths
      </div>
    </div>
  )
}
