import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardCheck, faFileAlt, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';

const pesertaMagang = [
  {
    name: 'Peserta Magang 1',
    university: 'Universitas Indonesia',
    status: 'Absent',
    statusColor: 'text-red-500',
    fileSupport: '-',
    fileSupportIcon: null
  },
  {
    name: 'Peserta Magang 2',
    university: 'Universitas Negeri Semarang',
    status: 'Terlambat',
    statusColor: 'text-yellow-500',
    fileSupport: '-',
    fileSupportIcon: null
  },
  {
    name: 'Peserta Magang 3',
    university: 'Universitas Diponegoro',
    status: 'Izin',
    statusColor: 'text-yellow-500',
    fileSupport: 'Download',
    fileSupportIcon: faDownload
  },
  {
    name: 'Peserta Magang 4',
    university: 'Universitas Diponegoro',
    status: 'Izin',
    statusColor: 'text-yellow-500',
    fileSupport: 'Download',
    fileSupportIcon: faDownload
  },
  {
    name: 'Peserta Magang 5',
    university: 'Universitas Diponegoro',
    status: 'Izin',
    statusColor: 'text-yellow-500',
    fileSupport: 'Download',
    fileSupportIcon: faDownload
  }
];

const Dashboard = () => {
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
              <th>Status</th>
              <th>File Pendukung</th>
            </tr>
          </thead>
          <tbody>
        {pesertaMagang.map((peserta, index) => (
          <tr key={index}>
            <td>
              <div className="flex items-center">
                <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
                <div className='mt-5'>
                  <div className="font-bold">{peserta.name}</div>
                  <div className="text-sm text-gray-500">{peserta.university}</div>
                </div>
              </div>
            </td>
            <td>
              <span className={peserta.statusColor}>{peserta.status}</span>
            </td>
            <td>
              {peserta.fileSupportIcon ? (
                <FontAwesomeIcon icon={peserta.fileSupportIcon} className="text-blue-500 cursor-pointer" />
              ) : (
                peserta.fileSupport
              )}
            </td>
          </tr>
        ))}
      </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
