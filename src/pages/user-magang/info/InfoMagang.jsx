import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'

const InfoMagang = () => {
  return (
    <div>
    <div className='flex gap-2'>
      <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className='pl-2 py-1 bg-white rounded flex-auto'>
        <h5>/ Magang / Informasi</h5>
      </div>
    </div>
    <div className='mt-3 flex-row'>
      <div className='flex-grow'>
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold">Pemberitahuan</p>
              <p class="text-sm">Adik adik yang mau bertemu Pak Asdani silahkan ke kantor.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex-grow mt-3'>
        <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
          <div class="flex">
            <div class="py-1"><svg class="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
            <div>
              <p class="font-bold">Pemberitahuan</p>
              <p class="text-sm">Adik adik yang mau bertemu Pak Asdani silahkan ke kantor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InfoMagang