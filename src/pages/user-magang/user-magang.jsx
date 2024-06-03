
import React, { useState } from 'react';
import Sidebar from '../../components/magangSidebar/magangSidebar';
import {DashboardMagang, InfoMagang, KelompokMagang, PesanMagang, PresensiMagang, ProgresMagang, TugasMagang} from './pages-magang'

const UserMagang = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <DashboardMagang/>;
      case 'Info':
        return <InfoMagang/>; 
      case 'Messages':
        return <PesanMagang/>; 
      case 'Kelompok':
        return <KelompokMagang/>; 
      case 'Presensi':
        return <PresensiMagang/>;
      case 'Progress':
        return <ProgresMagang/>;
      case 'Tugas':
        return <TugasMagang/>;
      
      default:
        return <DashboardMagang />;
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

export default UserMagang;
