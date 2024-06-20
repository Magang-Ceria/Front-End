import React from 'react'
import hutlogo from '../../assets/images/hut-477.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faInstagram, faFacebook, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div>
      <div className='h-80 bg-gradient-to-r from-red-500 to-red-400'>
        <div className='md:px-5 py-3'>
          <div className='s size-16'>
            <img src={hutlogo} alt="error displaying images" />
          </div>
          <div className='px-5 text-white mt-6 max-w-md'>
            <h1 className='font-bold'>Dinas Komunikasi, Persandian, dan Statistika Kota Semarang</h1>
            <p className='text-sm mt-2'>Jl. Pemuda No.148, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132, Indonesia</p>
          </div>
          <div className='px-5 *:text-sm text-white mt-5'>
            <p>diskominfo@semarangkota.go.id</p>
            <p>(024) 3549446</p>
          </div>
          <div className="flex space-x-2 px-5 mt-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-100 transition-colors">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-100 transition-colors">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-100 transition-colors">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-100 transition-colors">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer