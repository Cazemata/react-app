import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Dashboard from './icons/Dashboard';
import Library from './icons/Library';
import Paths from './icons/Paths';

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index); // Update active index when a button is clicked
  };

  const menuItems = [
    { Text: "Dashboard", Icon: <Dashboard /> },
    { Text: "Library", Icon: <Library /> },
    { Text: "My Paths", Icon: <Paths /> },
  ];

  return (
    <div className="Menu">
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          Text={item.Text}
          Icon={item.Icon}
          isActive={activeIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
}