import React, { useState } from 'react';

const messages = [
  {
    id: 1,
    subject: 'SUBJEK PESAN | PENGIRIM',
    date: '18/07/2022',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: 2,
    subject: 'SUBJEK PESAN | PENGIRIM',
    date: '17/05/2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem donec massa sapien faucibus et molestie ac feugiat. Neque volutpat ac tincidunt vitae semper quis lectus. Scelerisque eu ultrices vitae auctor. Sit amet nisl purus in mollis nunc. Consectetur adipiscing elit duis tristique sollicitudin nibh. Ultrices integer quis auctor elit sed vulputate mi. Ut faucibus pulvinar elementum integer enim. Luctus accumsan tortor posuere ac. Eget dolor morbi non arcu risus quis varius quam quisque. Vitae tortor condimentum lacinia quis vel eros donec. In aliquam sem fringilla ut morbi tincidunt augue. Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Quam quisque id diam vel quam elementum pulvinar etiam non.'
  }
];

const PesanMasuk = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMessages = messages.filter((message) =>
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.content.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Pesan Masuk</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Cari Pesan..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 border border-gray-300 rounded-md mr-4"
            />
            <button className="text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a2 2 0 012-2h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2V4z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 16h18M3 20h18" />
              </svg>
            </button>
          </div>
        </div>
        <button className="text-red-500 mb-4">Hapus Semua</button>
        {filteredMessages.map((message) => (
          <div key={message.id} className="mb-4 bg-white p-4 rounded shadow">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">{message.subject}</h2>
                <p className="text-gray-600 mt-2">{message.content}</p>
              </div>
              <div className="ml-4">
                <span className="text-gray-500">{message.date}</span>
                <button className="text-red-500 ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PesanMasuk;