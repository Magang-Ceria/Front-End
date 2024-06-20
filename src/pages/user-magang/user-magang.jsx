import React from 'react';
import Sidebar from '../../components/magangSidebar/magangSidebar';
import useActiveComponent from '../../config/activecomponent/activeComponents';

const UserMagang = () => {
  const { activeComponent, setActiveComponent, renderComponent } = useActiveComponent();

  return (
    <div className='bg-gray-100'>
      <div className="md:flex gap-5 mx-3 md:mx-10 md:py-5 py-2">
        <Sidebar setActiveComponent={setActiveComponent} />
        <div className='md:w-5/6'>
            {renderComponent()}
        </div>
      </div>
    </div>
    
  );
};

export default UserMagang;
