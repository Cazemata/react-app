import React from 'react'
import Language from './icons/Language'
import User from './icons/User'

export default function BottomMenu() {
  return (
    <div className="BottomMenu">
      <label for="theme">Pick a theme</label>
      <select className="dropdown" id="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <div className="item">
        <Language />
        Language
      </div>
      <div className="item">
        <User />
        Logout
      </div>
    </div>
  )
}
