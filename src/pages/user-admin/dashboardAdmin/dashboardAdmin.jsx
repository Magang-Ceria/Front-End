import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboardCheck, faFileAlt, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';

const dashboardAdmin = () => {
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
            <tr>
              <td>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
                  <div>
                    <div className="font-bold">Peserta Magang 1</div>
                    <div className="text-sm text-gray-500">Universitas Indonesia</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-red-500">Absent</span>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
                  <div>
                    <div className="font-bold">Peserta Magang 2</div>
                    <div className="text-sm text-gray-500">Universitas Negeri Semarang</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-yellow-500">Terlambat</span>
              </td>
              <td>-</td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
                  <div>
                    <div className="font-bold">Peserta Magang 2</div>
                    <div className="text-sm text-gray-500">Universitas Diponegoro</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-yellow-500">Izin</span>
              </td>
              <td>
                <FontAwesomeIcon icon={faDownload} className="text-blue-500 cursor-pointer" />
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUser} className="text-2xl mr-3" />
                  <div>
                    <div className="font-bold">Peserta Magang 2</div>
                    <div className="text-sm text-gray-500">Universitas Diponegoro</div>
                  </div>
                </div>
              </td>
              <td>
                <span className="text-yellow-500">Izin</span>
              </td>
              <td>
                <FontAwesomeIcon icon={faDownload} className="text-blue-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default dashboardAdmin;
