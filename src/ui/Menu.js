import React from 'react'
import MenuItem from './MenuItem';
import Dashboard from './icons/Dashboard';
import Library from './icons/Library';
import Paths from './icons/Paths';

export default function Menu() {
  return (
    <div className="Menu">
      <MenuItem Text="Dashboard" Icon={<Dashboard />} />
      <MenuItem Text="Library" Icon={<Library />} />
      <MenuItem Text="My Paths" Icon={<Paths />} />
    </div>
  )
}
