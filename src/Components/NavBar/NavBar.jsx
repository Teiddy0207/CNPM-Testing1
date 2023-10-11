import React, { useState } from 'react'

import { SiConsul } from 'react-icons/si'
import { BsPhoneVibrate } from 'react-icons/bs'
import { AiOutlineGlobal } from 'react-icons/ai'
import { CgMenuGridO } from 'react-icons/cg'
 import {  Link } from 'react-router-dom';




import logo from '../../assets/logo.jpg'

const NavBar = () => {

  const [active, setActive] = useState('navBarMenu')

  const showNavbar = () => {
    setActive('navBarMenu showNavBar')
  }

  const removeNavbar = () => {
    setActive('navBarMenu')
  }


  return (
    <div className='navBar flex'>
      <div className="navBarOne flex">
        <div>
          <SiConsul className='icon' />
        </div>
        <div className='none flex'>
          <li className='flex'  > <BsPhoneVibrate className='icon' /> Support</li>
          <li className='flex'> <AiOutlineGlobal className='icon' /> Langueges</li>
        </div>

        <div className="atb flex">
          
       <Link to = '/login'>Dang nhap</Link>

          {/* <span>Sign out</span> */}
          <Link to = '/register'>Dang ki</Link>
        </div>


      </div>
      <div className=' navBarTwo flex'>
        <div className="logoDiv">
          <img src={logo} className='Logo' />
        </div>


        <div className={active} >
          <ul className='menu flex'>
            <li onClick={removeNavbar} className='listItem'>
              Home
            </li>
            <li onClick={removeNavbar} className='listItem'>
              About
            </li>
            <li onClick={removeNavbar} className='listItem'>
              Offers
            </li>
            <li onClick={removeNavbar} className='listItem'>
              Seats
            </li>
            <li onClick={removeNavbar} className='listItem'>
              Destination
            </li>
          </ul>

          <button className='btn flex btnOne'>
            Contact
          </button>
           </div>
          <button className='btn flex btnTwo'>
            Contact
          </button>

          <div onClick={showNavbar} className="toggleIcon">
            <CgMenuGridO className='icon' />
          </div>

   
      </div>
    </div>
  )
}

export default NavBar;