import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserPlus, faUserMinus, faUserCheck, faUsers, } from '@fortawesome/free-solid-svg-icons';


const KelolaKelompok = () => {

  // Data Dummy
  const actions = [
    "Tambah Kelompok A",
    "Hapus Kelompok C",
    "Edit Peserta B",
    ".....",
    ".....",
    ".....",
    ".....",
    ".....",
    ".....",
    "....."
];

  return (
    <div>
      <div className='flex gap-2'>
        <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='pl-2 py-1 bg-white rounded flex-auto'>
          <h5>/ Magang / Kelola Kelompok</h5>
        </div>
      </div>

      <div className='mt-5'>        
        <div className='flex gap-3 mb-4'>
          <div className=' flex-1 p-3 bg-white shadow-md rounded-lg text-center'>
            <FontAwesomeIcon icon={faUserPlus} className="text-3xl mb-1" />
            <div className="text-3xl font-bold">300</div>
            <div>Peserta Masuk</div>
          </div>
          <div className='flex-1 p-3 bg-white shadow-md rounded-lg text-center'>
            <FontAwesomeIcon icon={faUserMinus} className="text-3xl mb-1" />
            <div className="text-3xl font-bold">200</div>
            <div>Peserta Keluar</div>
          </div>
          <div className='flex-1 p-3 bg-white shadow-md rounded-lg text-center'>
            <FontAwesomeIcon icon={faUserCheck} className="text-3xl mb-1" />
            <div className="text-3xl font-bold">100</div>
            <div>Jumlah Peserta Aktif</div>
          </div>
          <div className='flex-1 p-3 bg-white shadow-md rounded-lg text-center'>
            <FontAwesomeIcon icon={faUsers} className="text-3xl mb-1" />
            <div className="text-3xl font-bold">100</div>
            <div>Jumlah Kelompok</div>
          </div>
        </div>        
        <div className="flex gap-3">
            <div className="bg-white flex-[3] shadow-md rounded-lg p-4">
                {/* Main content goes here */}
            </div>
            <div className="bg-white flex-[1] shadow-md rounded-lg p-4">
                <h2 className="text-center text-lg font-bold mb-2">Recent Actions</h2>
                <div className="h-64 overflow-y-auto">
                    {actions.map((action, index) => (
                        <div key={index} className="bg-white p-2 my-1 rounded shadow">
                            {action}
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default KelolaKelompok;
