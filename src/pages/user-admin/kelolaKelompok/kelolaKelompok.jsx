import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PopUp from './popup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const KelolaKelompok = () => {
  const [activeTab, setActiveTab] = useState('Pendaftar');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedParticipant, setSelectedParticipant] = useState(null);

  const pendaftar = Array(6).fill({
    name: "Kelompok 1",
    startDate: "16 Februari 2024",
    endDate: "16 Juli 2024"
  });

  const pesertaAktif = Array(6).fill({
    name: "Kelompok Magang 1",
    startDate: "16 Februari 2024",
    endDate: "16 Juli 2024"
  });

  return (
    <div className="p-5">
      <div className="flex items-center space-x-2 mb-8">
        <FontAwesomeIcon icon={faBars} className="text-red-500" />
        <span>/ Monitoring / Dashboard</span>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4"></div>

        <div className="flex justify-between mb-2">
          <div className="relative flex w-1/4 mb-4 bg-gray-300 rounded p-1">
            <motion.div
              layout
              initial={{ borderRadius: 9999 }}
              animate={{ x: activeTab === 'Peserta Aktif' ? '100%' : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded"
            />
            <button
              className={`relative flex-1 text-center p-2 rounded ${activeTab === 'Pendaftar' ? 'text-white' : 'text-black'}`}
              onClick={() => setActiveTab('Pendaftar')}
            >
              Pendaftar
            </button>
            <button
              className={`relative  flex-1 text-center p-2 rounded ${activeTab === 'Peserta Aktif' ? 'text-white' : 'text-black'}`}
              onClick={() => setActiveTab('Peserta Aktif')}
            >
              Peserta Aktif
            </button>
          </div>
          <input 
            type="text" 
            placeholder="Cari Nama Kelompok" 
            className="p-2 border rounded-full h-12" 
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr className="w-full bg-gray-300">
                <th className="p-2 border-r"><input type="checkbox" /></th>
                <th className="p-2 border-r">{activeTab === 'Pendaftar' ? 'Nama Peserta' : 'Nama Ketua'}</th>
                <th className="p-2 border-r">Mulai Magang</th>
                <th className="p-2 border-r">Selesai Magang</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {(activeTab === 'Pendaftar' ? pendaftar : pesertaAktif).map((participant, index) => (
                <tr key={index} className="text-center border-t">
                  <td className="p-2 border-r"><input type="checkbox" /></td>
                  <td className="p-2 border-r">{participant.name}</td>
                  <td className="p-2 border-r">{participant.startDate}</td>
                  <td className="p-2 border-r">{participant.endDate}</td>
                  <td className="p-2 flex justify-around">
                    {activeTab === 'Pendaftar' ? (
                      <>
                        <button
                          className="p-1 bg-yellow-500 text-white rounded"
                          onClick={() => {
                            setSelectedParticipant(participant);
                            setIsModalOpen(true);
                          }}
                        >
                          Detail
                        </button>
                        <button className="p-1 bg-green-500 text-white rounded">Terima</button>
                        <button className="p-1 bg-red-500 text-white rounded">Tolak</button>
                      </>
                    ) : (
                      <>
                        <button className="p-1 bg-yellow-500 text-white rounded">Detail</button>
                        <button className="p-1 bg-red-500 text-white rounded">Hapus</button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {isModalOpen && (
          <PopUp
            participant={selectedParticipant}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default KelolaKelompok;
