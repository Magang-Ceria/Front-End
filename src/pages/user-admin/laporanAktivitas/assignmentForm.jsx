import React from 'react';

const AssignmentForm = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Tambah Penugasan</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Penugasan</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              defaultValue="Membuat Konten"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Deadline</label>
            <input
              type="date"
              className="mt-1 p-2 border rounded w-full"
              defaultValue="2025-01-01"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Kirim Ke</label>
            <input
              type="text"
              className="mt-1 p-2 border rounded w-full"
              defaultValue="A111111"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">File Pendukung</label>
            <input type="file" className="mt-1 p-2 border rounded w-full" />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Batal
            </button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Tambah
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AssignmentForm;
