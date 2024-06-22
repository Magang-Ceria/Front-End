import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardCheck, faFileAlt, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';

const participants = [
  { name: 'Peserta Magang 1', university: 'Universitas Indonesia', morningStatus: 'Absent', morningFile: null, afternoonStatus: 'Absent', afternoonFile: null },
  { name: 'Peserta Magang 2', university: 'Universitas Negeri Semarang', morningStatus: 'Terlambat', morningFile: true, afternoonStatus: 'Terlambat', afternoonFile: true },
  { name: 'Peserta Magang 3', university: 'Universitas Diponegoro', morningStatus: 'Izin', morningFile: true, afternoonStatus: 'Izin', afternoonFile: true },
  { name: 'Peserta Magang 4', university: 'Universitas Diponegoro', morningStatus: 'Izin', morningFile: true, afternoonStatus: 'Izin', afternoonFile: true },
];

const statusColors = {
  Absent: 'bg-red-500 text-white',
  Terlambat: 'bg-orange-500 text-white',
  Izin: 'bg-yellow-500 text-black',
};

const DashboardAdmin = () => {
  return (
    <div className="flex flex-col p-5 space-y-5 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBars} className="text-red-500" />
          <span>/ Monitoring / Dashboard</span>
        </div>
        <div className="text-2xl font-bold">Selamat Datang, Admin</div>
      </div>

      <div className="grid grid-cols-3 gap-5"> 
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <FontAwesomeIcon icon={faUser} className="text-3xl mb-3" />
          <div className="text-3xl font-bold">300</div>
          <div>Peserta Aktif</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <FontAwesomeIcon icon={faClipboardCheck} className="text-3xl mb-3" />
          <div className="text-3xl font-bold">200</div>
          <div>Presensi Masuk</div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-5 text-center">
          <FontAwesomeIcon icon={faFileAlt} className="text-3xl mb-3" />
          <div className="text-3xl font-bold">100</div>
          <div>Belum Presensi / Tidak Hadir</div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg p-5">
        <div className="font-bold mb-5">Peserta Tidak Hadir</div>
        <table className="w-full text-left">
          <thead>
            <tr>
              <th>Nama</th>
              <th>Morning</th>
              <th>Afternoon</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center mt-3">
                    <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
                    <div>
                      <div className="font-bold">{participant.name}</div>
                      <div className="text-sm text-gray-500">{participant.university}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full ${statusColors[participant.morningStatus]}`}>
                      {participant.morningStatus}
                    </span>
                    {participant.morningFile && (
                      <FontAwesomeIcon icon={faDownload} className="text-blue-500 cursor-pointer" />
                    )}
                  </div>
                </td>
                <td>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full ${statusColors[participant.afternoonStatus]}`}>
                      {participant.afternoonStatus}
                    </span>
                    {participant.afternoonFile && (
                      <FontAwesomeIcon icon={faDownload} className="text-blue-500 cursor-pointer" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardAdmin;
