import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useMemo } from "react";

const data = [
  {
    name: "Budi Santoso",
    institution: "Universitas Negeri Semarang",
    address: "Jl. Sekaran Gunungpati, Semarang",
    phonenumber: "081234567890",
    email: "budi.santoso@unnes.ac.id",
  },
  {
    name: "Siti Aminah",
    institution: "Universitas Negeri Semarang",
    address: "Jl. Sekaran Gunungpati, Semarang",
    phonenumber: "081298765432",
    email: "siti.aminah@unnes.ac.id",
  },
  {
    name: "Andi Wijaya",
    institution: "Universitas Negeri Semarang",
    address: "Jl. Sekaran Gunungpati, Semarang",
    phonenumber: "081334455667",
    email: "andi.wijaya@unnes.ac.id",
  },
  {
    name: "Rina Puspitasari",
    institution: "Universitas Negeri Semarang",
    address: "Jl. Sekaran Gunungpati, Semarang",
    phonenumber: "081322334455",
    email: "rina.puspitasari@unnes.ac.id",
  },
  {
    name: "Agus Haryanto",
    institution: "Universitas Negeri Semarang",
    address: "Jl. Sekaran Gunungpati, Semarang",
    phonenumber: "081355667788",
    email: "agus.haryanto@unnes.ac.id",
  },
];

const Kelompok = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "No",
        size: 50,
      },
      {
        accessorKey: "name",
        header: "Nama",
        size: 150,
      },
      {
        accessorKey: "institution",
        header: "Institusi",
        size: 150,
      },
      {
        accessorKey: "address",
        header: "Alamat",
        size: 200,
      },
      {
        accessorKey: "phonenumber",
        header: "Telepon",
        size: 150,
      },
      {
        accessorKey: "actions",
        header: "Aksi",
        size: 50,
      },
    ],
    []
  );

  const handleEdit = (index) => {
    console.log("Edit row:", index);
  };

  const handleDelete = (index) => {
    console.log("Delete row:", index);
  };

  return (
    <div>
      <div className='hidden md:flex gap-2'>
        <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='pl-2 py-1 bg-white rounded flex-auto'>
          <h5>/ Magang / Kelompok</h5>
        </div>
      </div>
      <div className="mt-3">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <h3 className="font-semibold text-base text-blueGray-700">
                  Data Kelompok
                </h3>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-red-500 text-white active:bg-red-800 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Tambah Anggota
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      key={column.accessorKey}
                      className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                    >
                      {column.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column) => (
                      <td
                        key={column.accessorKey}
                        className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"
                      >
                        {column.accessorKey === "no" ? rowIndex + 1 : column.accessorKey === "actions" ? (
                          <div className="flex space-x-2">
                            <button
                              className="text-white bg-blue-500 rounded-sm p-2 hover:bg-white hover:text-blue-500 border border-blue-500 transition"
                              onClick={() => handleEdit(rowIndex)}
                            >
                              <FontAwesomeIcon icon={faEdit} />
                            </button>
                            <button
                              className="bg-red-500 text-white rounded-sm p-2 hover:bg-white hover:text-red-500 border border-red-500 transition"
                              onClick={() => handleDelete(rowIndex)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </button>
                          </div>
                        ) : (
                          row[column.accessorKey]
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelompok;
