import React from 'react'
import logodiskom from '../../assets/images/logo-diskominfo.png'
import hut78 from '../../assets/images/hutri-78.png'
import hut477 from '../../assets/images/hut-477-red.png'

const Header = () => {
  return (
    <div className='bg-white md:px-16 py-1 px-3'>
        <div className='content-center flex justify-between'>
          <div>
            <img className='md:h-20 h-12' src={hut477} alt="header image" />
          </div>
          <div>
            <img className='md:h-20 h-12' src={logodiskom} alt="header image" />
          </div>
          <div>
            <img className='md:h-20 h-11' src={hut78} alt="header image" />
          </div>
        </div>
        <div className='mt-1 w-full border-t border-black'>
        </div>
    </div>
  )
}

export default Header