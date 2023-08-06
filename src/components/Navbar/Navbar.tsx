import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div><NavLink to={'/'}>Profile</NavLink></div>
      <div><NavLink to={'/dialogs'}>Dialogs</NavLink></div>
        {/* <a href='#1'>Profile</a>
        <a href='#1'>Messages</a>
        <a href='#1'>News</a>
        <a href='#1'>Popular groups</a> */}
    </nav>
  )
}

export default Navbar