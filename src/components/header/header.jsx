import React from 'react'
import logo from '../../assets/images/header.png'

const Header = () => {
  return (
    <div className='bg-white md:px-16 py-1 px-3'>
        <div className='content-center'>
            <img src={logo} alt="header image" />
        </div>
        <div className='mt-1 w-full border-t border-black'>
        </div>
    </div>
  )
}

export default Header