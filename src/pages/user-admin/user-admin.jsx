
<<<<<<< HEAD
import React, { useState } from 'react';
import Sidebar from '../../components/admin/monitoringSidebar.js';
import Dashboard from '../../components/admin/dashboard.js';
import Pesan from '../../components/admin/pesan.js';
import Kelola from '../../components/admin/kelola.js';
import Laporan from '../../components/admin/laporan.js';
import Statistik from '../../components/admin/statistik.js';
import Kirim from '../../components/admin/kirim.js';
=======
import React, { useState } from 'react'; 
import Sidebar from '../../components/monitoringSidebar/monitoringSidebar';
import {DashboardAdmin, KelompokAdmin, BroadcastAdmin, AktivitasAdmin, PesanAdmin, RiwayatBroadcast, Statistik} from './pages-admin'
>>>>>>> c4b9132b36a7d8de786a72d705c38d5ab1a8db52

const UserAdmin = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <DashboardAdmin />;
      case 'Messages':
        return <PesanAdmin/>; 
      case 'KelolaPeserta':
        return <KelompokAdmin/>; 
      case 'LaporanAktivitas':
        return <AktivitasAdmin/>;  
      case 'StatistikKehadiran':
        return <Statistik/>;
      case 'KirimBroadcast':
<<<<<<< HEAD
        return <Kirim/>;
      
=======
        return <BroadcastAdmin/>;
      case 'RiwayatBroadcast':
        return <RiwayatBroadcast/>;

>>>>>>> c4b9132b36a7d8de786a72d705c38d5ab1a8db52
      default:
        return <DashboardAdmin />;
    }
  };

  return (
<<<<<<< HEAD
    <div className="App-flex flex ml-10 mt-5 ">
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="flex-1 p-10 2 ">
        {renderComponent()}
=======
    <div className='bg-gray-100'>
      <div className="flex gap-5 mx-10 py-5">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className='w-5/6'>
            {renderComponent()}
        </div>
>>>>>>> c4b9132b36a7d8de786a72d705c38d5ab1a8db52
      </div>
    </div>
  );
};

export default UserAdmin;