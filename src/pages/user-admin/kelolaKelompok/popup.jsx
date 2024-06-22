import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ participant, onClose }) => {
  if (!participant) return null;

  const {
    name,
    startDate,
    endDate,
    members = ["Gandi", "Satria", "Dewi", "Rini"],
    leader = "Nama Ketua", 
    university = "Nama Universitas", 
    pdfLink = "#" 
  } = participant;


  const columns = [];
  const membersPerColumn = 5;
  for (let i = 0; i < members.length; i += membersPerColumn) {
    columns.push(members.slice(i, i + membersPerColumn));
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50"
    >
      <motion.div 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        className="bg-white p-8 rounded-lg w-1/2"
      >
        <h2 className="text-lg font-bold mb-4">{name}</h2>
        <p><strong>Ketua Kelompok:</strong> {leader}</p>
        <p><strong>Asal Universitas:</strong> {university}</p>
        <p><strong>Durasi Magang:</strong> {startDate} - {endDate}</p>
        <p><strong>List Anggota:</strong></p>
        <div className="flex flex-col">
          {columns.map((column, index) => (
            <div key={index} className="mb-2">
              {column.map((member, idx) => (
                <div key={idx} className='flex items-center'>
                  <span className="mr-2">&#8226;</span>{member}</div>
              ))}
            </div>
          ))}
        </div>
        <a 
          href={pdfLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block mt-4 underline text-blue-500"
        >
          File Pendukung (PDF)
        </a>
        <button 
          className="mt-4 p-2 bg-gray-300 rounded" 
          onClick={onClose}
        >
          Tutup
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
