import React, { useState } from 'react';
import AssignmentForm from './assignmentForm';

const tasks = [
  { status: 'Completed', code: 'T11111', assignment: 'Review Website', deadline: '16 Juli 2024' },
  { status: 'Process', code: 'T11112', assignment: 'Pembuatan Video', deadline: '16 Juli 2024' },
  { status: 'Scheduled', code: 'T11113', assignment: 'Pembuatan laporan', deadline: '16 Juli 2024' },
  { status: 'Completed', code: 'T11114', assignment: 'Monitoring Website', deadline: '16 Juli 2024' },
  { status: 'Process', code: 'T11115', assignment: 'Pembuatan Konten', deadline: '16 Juli 2024' },
  { status: 'Scheduled', code: 'T11116', assignment: 'Mengisi Survei', deadline: '16 Juli 2024' },
];

const statusColors = {
  Completed: 'bg-green-500',
  Process: 'bg-orange-500',
  Scheduled: 'bg-blue-500',
};

const ActivityReport = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTasks = tasks.filter(task => 
    task.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.assignment.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Aktivitas Penugasan Kelompok</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleOpenForm}>
          + Tambah Penugasan
        </button>
      </div>
      <input
        type="text"
        placeholder="Cari Penugasan"
        className="mb-4 p-2 border rounded-full w-100"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-center">Status</th>
            <th className="py-2 text-left">Kode Tugas</th>
            <th className="py-2 text-left">Penugasan</th>
            <th className="py-2 text-left">Deadline</th>
            <th className="py-2 text-left">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">
                <span className={`text-white px-2 py-1 rounded-full ml-10 ${statusColors[task.status]}`}>
                  {task.status}
                </span>
              </td>
              <td className="py-2">{task.code}</td>
              <td className="py-2">{task.assignment}</td>
              <td className="py-2">{task.deadline}</td>
              <td className="py-2 flex space-x-2">
                <button className="text-green-500 hover:text-green-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={handleOpenForm}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.121 2.121 0 113 3L12.025 21H8v-4.025l9.732-9.732z"
                    />
                  </svg>
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isFormOpen && <AssignmentForm onClose={handleCloseForm} />}
    </div>
  );
};

export default ActivityReport;
