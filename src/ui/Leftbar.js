import React from 'react'
import Menu from './Menu'
import BottomMenu from './BottomMenu'
import Logo from './icons/Logo'

export default function Leftbar() {
  return (
    <div className="Leftbar">
      <div className="top-menu">
        <div className="logo">
          <Logo />
        </div>
        <Menu />
      </div>
      <BottomMenu />
    </div>
  )
}
