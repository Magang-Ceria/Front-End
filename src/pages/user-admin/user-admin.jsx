
import React, { useState } from 'react';
import Sidebar from '../../components/admin/monitoringSidebar.js';
import Dashboard from '../../components/admin/dashboard.js';
import Pesan from '../../components/admin/pesan.js';
import Kelola from '../../components/admin/kelola.js';
import Laporan from '../../components/admin/laporan.js';
import Statistik from '../../components/admin/statistik.js';
import Kirim from '../../components/admin/kirim.js';

const UserAdmin = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Messages':
        return <Pesan/>; 
      case 'KelolaPeserta':
        return <Kelola/>; 
      case 'LaporanAktivitas':
        return <Laporan/>;
      case 'StatistikKehadiran':
        return <Statistik/>;
      case 'KirimBroadcast':
        return <Kirim/>;
      
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App-flex flex ml-10 mt-5 ">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 p-10 2 ">
        {renderComponent()}
      </div>
    </div>
  );
};

export default UserAdmin;
