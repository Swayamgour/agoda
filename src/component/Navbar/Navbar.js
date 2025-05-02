import React from 'react'
import '../Navbar/Navbar.css'
import { BsThreeDots } from 'react-icons/bs'
import { PiShoppingCartThin } from "react-icons/pi";
import { CiMenuFries } from "react-icons/ci";

function Navbar () {
  return (
    <>
      <div className='Navbar_Main'>
        <div className='navbar_left'>
          <div className='Navbar_logo'>
            <img
              src='/images/color-default.svg'
              alt='logo'
              width={80}
              height={60}
            />
          </div>

          <p> Flight + Hotel</p>
          <p> Hotel & Homes</p>
          <p> Transport</p>
          <p>
            {' '}
            <BsThreeDots />
          </p>
        </div>

        <div className='navbar_right'>
          <div className='Navbar_logo'>
            <img src='/images/flag.png' alt='logo' width={30} height={20} />
          </div>
          <p>Rs.</p>
          <button>Sign in</button>
          <button>Create account</button>
          <div className='navbar_shopIcon'>
            {' '}
            <PiShoppingCartThin />
          </div>
          <div className='navbar_MenuIcon'>
            {' '}
            <CiMenuFries />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
