import React from 'react'
import MenuItem from './MenuItem';
import Language from './icons/Language';
import User from './icons/User';

export default function BottomMenu() {
  return (
    <div className="BottomMenu">
      <label forhtml="theme">Pick a theme</label>
      <select className="dropdown" id="theme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <MenuItem Text="Language" Icon={<Language />} />
      <MenuItem Text="Logout" Icon={<User />} />
    </div>
  )
}
