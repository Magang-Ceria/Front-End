
import React, { useState } from 'react'; 
import Sidebar from '../../components/monitoringSidebar/monitoringSidebar';
import {DashboardAdmin, KelompokAdmin, BroadcastAdmin, AktivitasAdmin, PesanAdmin, RiwayatBroadcast, Statistik} from './pages-admin'

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
        return <BroadcastAdmin/>;
      case 'RiwayatBroadcast':
        return <RiwayatBroadcast/>;

      default:
        return <DashboardAdmin />;
    }
  };

  return (
    <div className='bg-gray-100'>
      <div className="flex gap-5 mx-10 py-5">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className='w-5/6'>
            {renderComponent()}
        </div>
      </div>
    </div>
  );
};

export default UserAdmin;