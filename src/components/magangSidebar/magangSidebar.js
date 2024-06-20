import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ setActiveComponent }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeComponent, setActiveComponentState] = useState('Dashboard');

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const controlSidebar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleSetActiveComponent = (component) => {
    setActiveComponentState(component);
    setActiveComponent(component);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlSidebar);

      return () => {
        window.removeEventListener('scroll', controlSidebar);
      };
    }
  }, [lastScrollY]);

  return (
    <div>
      <div className="bg-white md:w-64 md:p-4 rounded-lg md:block hidden">
        <div className="text-left md:block hidden">
          <h2 className="text-red-500 font-semibold mb-4">UMUM</h2>
          <ul className="mb-8">
            <li className="mb-2">
              <button
                onClick={() => handleSetActiveComponent('Dashboard')}
                className={`flex items-center p-2 rounded-md w-full text-left ${activeComponent === 'Dashboard' ? 'text-red-500' : 'text-black'}`}
              >
                <span className="mr-2">🏠</span> Dashboard
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSetActiveComponent('Pesan Masuk')}
                className={`flex items-center p-2 rounded-md w-full text-left ${activeComponent === 'Pesan Masuk' ? 'text-red-500' : 'text-black'}`}
              >
                <span className="mr-2">📧</span> Pesan Masuk
              </button>
            </li>
          </ul>
          <h2 className="text-red-500 font-semibold mb-4">MAGANG</h2>
          <ul className="mb-8">
            <li className="mb-2">
              <button
                onClick={() => handleSetActiveComponent('Kelompok')}
                className={`flex items-center p-2 rounded-md w-full text-left ${activeComponent === 'Kelompok' ? 'text-red-500' : 'text-black'}`}
              >
                <span className="mr-2">👥</span> Kelompok
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleSetActiveComponent('Tugas')}
                className={`flex items-center p-2 rounded-md w-full text-left ${activeComponent === 'Tugas' ? 'text-red-500' : 'text-black'}`}
              >
                <span className="mr-2">📑</span> Tugas
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSetActiveComponent('Presensi')}
                className={`flex items-center p-2 rounded-md w-full text-left ${activeComponent === 'Presensi' ? 'text-red-500' : 'text-black'}`}
              >
                <span className="mr-2">🗓️</span> Presensi
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex gap-2">
          <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
            <button onClick={handleClick}>
              {isVisible ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
            </button>
          </div>
          <div className="pl-2 py-1 bg-white rounded flex-auto">
            <h5>/ Magang / {activeComponent}</h5>
          </div>
        </div>

        {isVisible && (
          <nav className="bg-white rounded-md p-2 flex-row fixed mt-2 shadow-md z-50">
            <div>
              <a onClick={() => handleSetActiveComponent('Dashboard')}>🏠 Beranda</a>
            </div>
            <div>
              <a onClick={() => handleSetActiveComponent('Pesan Masuk')}>📧 Pesan Masuk</a>
            </div>
            <div>
              <a onClick={() => handleSetActiveComponent('Kelompok')}>👥 Kelompok</a>
            </div>
            <div>
              <a onClick={() => handleSetActiveComponent('Tugas')}>📑 Tugas</a>
            </div>
            <div>
              <a onClick={() => handleSetActiveComponent('Presensi')}>🗓️ Presensi</a>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
};

export default Sidebar;