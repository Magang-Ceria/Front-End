import React from 'react';

const Sidebar = ({ setActiveComponent, activeComponent }) => {
  const getButtonClass = (component) => {
    return component === activeComponent ? 'flex items-center text-white bg-red-500 p-2 rounded-md w-full text-left' : 'flex items-center text-black p-2 rounded-md w-full text-left';
  };

  return (
    <div className="bg-gray-100 h-screen w-64 p-4 rounded-lg">
      <div className="text-left">
        <h2 className="text-red-500 font-semibold mb-4">UMUM</h2>
        <ul className="mb-8">
          <li className="mb-2">
            <button 
              onClick={() => setActiveComponent('Dashboard')}
              className={getButtonClass('Dashboard')}
            >
              <span className="mr-2">🏠</span> Dashboard
            </button>
          </li>
          <li>
            <button 
              onClick={() => setActiveComponent('Messages')}
              className={getButtonClass('Messages')}
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
              className={getButtonClass('KelolaPeserta')}
            >
              <span className="mr-2">👥</span> Kelola Kelompok
            </button>
          </li>
          <li className="mb-2">
            <button
                onClick={() => setActiveComponent('LaporanAktivitas')}
                className={getButtonClass('LaporanAktivitas')}
              >
                <span className="mr-2">📊</span> Laporan Aktivitas
            </button>
          </li>
          <li>
          <button
                onClick={() => setActiveComponent('StatistikKehadiran')}
                className={getButtonClass('StatistikKehadiran')}
              >
                <span className="mr-2">📅</span> Statistik Kehadiran
            </button>
          </li>
        </ul>
        
        <h2 className="text-red-500 font-semibold mb-4">BROADCAST PESAN</h2>
        <ul>
          <li className="mb-2">
            <a 
              href="#" 
              className={getButtonClass('KirimBroadcast')}
              onClick={() => setActiveComponent('KirimBroadcast')}
            >
              <span className="mr-2">✈️</span> Kirim Broadcast
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className={getButtonClass('RiwayatBroadcast')}
              onClick={() => setActiveComponent('RiwayatBroadcast')}
            >
              <span className="mr-2">⏱️</span> Riwayat Broadcast
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
