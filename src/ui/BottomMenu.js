import React from 'react';
import MenuItem from './MenuItem';
import Language from './icons/Language';
import User from './icons/User';

export default function BottomMenu({ onThemeChange }) {
  const handleThemeChange = (event) => {
    onThemeChange(event.target.value);
  };

  return (
    <div className="BottomMenu">
      <label>Pick a theme</label>
      <select className="dropdown" onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <MenuItem Text="Language" Icon={<Language />} />
      <MenuItem Text="Logout" Icon={<User />} />
    </div>
  );
}