import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'

const presensiMagang = () => {
  return (
    <div>
    <div className='hidden md:flex gap-2'>
      <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='pl-2 py-1 bg-white rounded flex-auto'>
        <h5>/ Magang / Presensi</h5>
      </div>
    </div>
    <div className='mt-3'>

    </div>
  </div>
  )
}

export default presensiMagang 