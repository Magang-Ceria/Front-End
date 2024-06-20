import { useState } from 'react';
import { DashboardMagang, KelompokMagang, PesanMagang, PresensiMagang, TugasMagang } from '../../pages/user-magang/pages-magang';

const useActiveComponent = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Dashboard':
        return <DashboardMagang />;
      case 'Pesan Masuk':
        return <PesanMagang />; 
      case 'Kelompok':
        return <KelompokMagang />; 
      case 'Presensi':
        return <PresensiMagang />;
      case 'Tugas':
        return <TugasMagang />;
      default:
        return <DashboardMagang />;
    }
  };

  return {
    activeComponent,
    setActiveComponent,
    renderComponent
  };
};

export default useActiveComponent;