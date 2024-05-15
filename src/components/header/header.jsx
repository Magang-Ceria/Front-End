import React from 'react'
import logo from '../../assets/images/header.png'

const Header = () => {
  return (
    <div className='bg-white md:px-16 py-1 px-3'>
        <div className='content-center'>
            <img src={logo} alt="header image" />
        </div>
        <div className='mt-1 w-full border-t border-black'>
            <div className='hidden md:flex md:gap-10 mt-1'>
            <p className='md:ml-3 hover:font-semibold'><a href="#">Beranda</a></p>
            <p className='hover:font-semibold'><a href="#">Magang</a></p>
            <p className='hover:font-semibold'><a href="#">Profil</a></p>
            <p className='hover:font-semibold'><a href="#">Kontak</a></p>
            </div>
        </div>
    </div>
  )
}

export default Header