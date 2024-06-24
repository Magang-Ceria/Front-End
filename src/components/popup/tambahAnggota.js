import React from 'react';

const TambahAnggota = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-5 rounded shadow-lg mx-auto">
        <button className="text-white float-right bg-red-500 font-bold text-xs rounded-md py-1 px-2" onClick={onClose}>X</button>
        <h1 className='mb-5 font-bold'>Tambah Anggota Kelompok</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="nama" className="block mb-2 text-sm font-medium">Nama Lengkap</label>
            <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nama" className="block mb-2 text-sm font-medium">Institusi</label>
            <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nama" className="block mb-2 text-sm font-medium">Alamaat</label>
            <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div className="mb-3">
            <label htmlFor="nama" className="block mb-2 text-sm font-medium">Telepon</label>
            <input type="text" id="nama" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
          <div>
            <button className="text-white float-right bg-blue-500 font-medium text-sm mt-3 rounded-md py-1 px-2" onClick={onClose}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TambahAnggota;