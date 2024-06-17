import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

const dashboardMagang = () => {
  return (
    <div>
      <div className='hidden md:flex gap-2'>
      <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='pl-2 py-1 bg-white rounded flex-auto'>
          <h5>/ Magang / Dashboard</h5>
        </div>
      </div>
      <div className='mt-3'>
        <h2 className='text-xl'>Selamat datang, King</h2>
        <h3 className='mt-2'>Kegiatan Aktif</h3>
        <div className='bg-white rounded-md p-3 mt-2 md:flex gap-5'>
          <div className=' bg-gray-300 h-36 w-60 rounded-md'>
          </div>
          <div>
            <h2>Magang UNNES Kelompok 1</h2>
            <p className=' text-gray-400 text-sm'>02 Februari 2024 - 02 Juli 2024</p>
            <small className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi qui veniam dicta quae. Et recusandae neque reiciendis temporibus ullam. Reprehenderit veritatis autem ducimus. Et veritatis ut quod repellat eveniet reiciendis.</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default dashboardMagang