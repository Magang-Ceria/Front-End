import React from 'react';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="bg-white h-screen w-64 p-4 rounded-lg">
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
              onClick={() => setActiveComponent('Messages')}
              className="flex items-center text-black p-2 rounded-md w-full text-left"
            >
              <span className="mr-2">📧</span> Pesan Masuk
            </button>
          </li>
        </ul> 
        <h2 className="text-red-500 font-semibold mb-4">MONITORING MAGANG</h2>
        <ul className="mb-8">
          <li className="mb-2">
            <button
              onClick={() => setActiveComponent('KelolaPeserta')}
              className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
            >
              <span className="mr-2">👥</span> Kelola Kelompok
            </button>
          </li>
          <li className="mb-2">
            <button
                onClick={() => setActiveComponent('LaporanAktivitas')}
                className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
              >
                <span className="mr-2">📊</span> Laporan Aktivitas
            </button>
          </li>          
        </ul>
        
        <h2 className="text-red-500 font-semibold mb-4">BROADCAST PESAN</h2>
        <ul>
          <li className="mb-2">
            <button
                onClick={() => setActiveComponent('KirimBroadcast')}
                className='flex items-center text-red-500 p-2 rounded-md w-full text-left'
                >
                <span className="mr-2">✈️</span> Kirim Broadcast
            </button>            
          </li>             
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
