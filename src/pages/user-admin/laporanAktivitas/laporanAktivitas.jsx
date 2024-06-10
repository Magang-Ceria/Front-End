import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars } from '@fortawesome/free-solid-svg-icons'
import { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

const data = [
  {
    name: {
      firstName: 'John',
      lastName: 'Doe',
    },
    address: '261 Erdman Ford',
    city: 'East Daphne',
    state: 'Kentucky',
  },
  {
    name: {
      firstName: 'Jane',
      lastName: 'Doe',
    },
    address: '769 Dominic Grove',
    city: 'Columbus',
    state: 'Ohio',
  },
  {
    name: {
      firstName: 'Joe',
      lastName: 'Doe',
    },
    address: '566 Brakus Inlet',
    city: 'South Linda',
    state: 'West Virginia',
  },
  {
    name: {
      firstName: 'Kevin',
      lastName: 'Vandy',
    },
    address: '722 Emie Stream',
    city: 'Lincoln',
    state: 'Nebraska',
  },
  {
    name: {
      firstName: 'Joshua',
      lastName: 'Rolluffs',
    },
    address: '32188 Larkin Turnpike',
    city: 'Charleston',
    state: 'South Carolina',
  },
];

const LaporanAktivitas = () => {
    const columns = useMemo(
        () => [
          {
            id: 'select',
            header: ({ table }) => (
              <input
                type="checkbox"
                checked={table.getIsAllPageRowsSelected()}
                onChange={table.getToggleAllPageRowsSelectedHandler()}
              />
            ),
            cell: ({ row }) => (
              <input
                type="checkbox"
                checked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
              />
            ),
            size: 40,
          },
          {
            accessorKey: 'name.firstName', //access nested data with dot notation
            header: 'First Name',
            size: 150,
          },
          {
            accessorKey: 'name.lastName',
            header: 'Last Name',
            size: 150,
          },
          {
            accessorKey: 'address', //normal accessorKey
            header: 'Address',
            size: 200,
          },
          {
            accessorKey: 'city',
            header: 'City',
            size: 150,
          },
          {
            accessorKey: 'state',
            header: 'State',
            size: 150,
          },
        ],
        [],
      );
    
      const table = useMaterialReactTable({
        columns,
        data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
        enableRowSelection: true, // enable row selection
      });
    
      return (
        <div>
          <div className='flex gap-2'>
            <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className='pl-2 py-1 bg-white rounded flex-auto'>
              <h5>/ Magang / Kelompok</h5>
            </div>
          </div>
          <div className='mt-3'>
            {/* Button Add */}
            {/* <div className="flex justify-between mb-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                Tambah Data
              </button>
            </div> */}
            <MaterialReactTable table={table} />
          </div>
        </div>
      );
    }

export default LaporanAktivitas