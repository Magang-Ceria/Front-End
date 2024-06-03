import React from 'react';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="bg-white w-64 p-4 rounded-lg">
      <div className="text-left">
        <h2 className="text-red-500 font-semibold mb-4">UMUM</h2>
        <ul className="mb-8">
          <li className="mb-2">
            <button 
              onClick={() => setActiveComponent('Dashboard')}
              className="flex items-center text-red-500  p-2 rounded-md w-full text-left"
            >
              <span className="mr-2">🏠</span> Dashboard
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveComponent('Info')}
              className="flex items-center text-black p-2 rounded-md w-full text-left"
            >
              <span className="mr-2">📌</span> Informasi
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveComponent('Messages')}
              className="flex items-center text-black p-2 rounded-md w-full text-left"
            >
              <span className="mr-2">📧</span> Pesan Masuk
            </button>
          </li>
        </ul> 
        <h2 className="text-red-500 font-semibold mb-4">MAGANG</h2>
        <ul className="mb-8">
          <li className="mb-2">
            <button
              onClick={() => setActiveComponent('Kelompok')}
              className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
            >
              <span className="mr-2">👥</span> Kelompok
            </button>
          </li>
          <li className="mb-2">
            <button
                onClick={() => setActiveComponent('Tugas')}
                className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
              >
                <span className="mr-2">📑</span> Tugas
            </button>
          </li>
          <li>
          <button
                onClick={() => setActiveComponent('Presensi')}
                className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
              >
                <span className="mr-2">🗓️</span> Presensi
            </button>
          </li>
          <li>
          <button
                onClick={() => setActiveComponent('Progress')}
                className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
              >
                <span className="mr-2">📈</span> Progress Mingguan
            </button>
          </li>
        </ul>

      </div>
    </div>
  );
};

export default Sidebar;