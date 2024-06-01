
import React, { useState } from 'react';
import Sidebar from '../../components/monitoringSidebar/monitoringSidebar';
import Dashboard from '../../components/monitoringSidebar/dashboard';
import Pesan from '../../components/monitoringSidebar/pesan';
import Kelola from '../../components/monitoringSidebar/kelola';
import Laporan from '../../components/monitoringSidebar/laporan';
import Statistik from '../../components/monitoringSidebar/statistik.js';

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
      
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="App-flex flex ml-10">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 p-10">
        {renderComponent()}
      </div>
    </div>
  );
};

export default UserAdmin;
