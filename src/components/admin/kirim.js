import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const BroadcastForm = () => {
  const [message, setMessage] = useState('');
  const [participants, setParticipants] = useState(['Participant 1', 'Participant 2', 'Participant 3']);
  const [broadcasts, setBroadcasts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBroadcast = {
      message,
      date: new Date().toLocaleString(), // Menambahkan tanggal dan waktu pengiriman
    };
    setBroadcasts([...broadcasts, newBroadcast]);
    setMessage('');
  };

  const handleDelete = (index) => {
    setBroadcasts(broadcasts.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kirim Pesan Broadcast</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
            Pesan:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Kirim
        </button>
      </form>
      <h2 className="text-xl font-bold mb-2">Pesan Terkirim:</h2>
      <ul className="list-disc pl-5">
        {broadcasts.map((broadcast, index) => (
          <li key={index} className="mb-2 flex justify-between items-center">
            <div>
              <span className="font-semibold">{broadcast.message}</span> - <span className="text-gray-600">{broadcast.date}</span>
            </div>
            <button
              onClick={() => handleDelete(index)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline flex items-center"
            >
              <DeleteIcon />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BroadcastForm;
