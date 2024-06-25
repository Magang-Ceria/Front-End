import React from 'react'
import logo from '../../assets/images/header.png'
import banner from '../../assets/images/home1.png'
import { render } from '@testing-library/react'
import logo2 from '../../assets/icons/plus.png'
import Footer from '../../components/footer/footer';

const Dashobard = () => {
  return (
    <div>
      <header>
        {/* gasris  */}
        <div className='bg-gradient-to-r from-pink-500 to-rose-500 h-10 flex justify-end items-center'>
          <button className='text-white bg-blue-800 rounded-xl py-2 px-6 mr-4'>Masuk</button>
        </div>
      </header>
      {/* main */}
      <main className=" container mx-auto max-w-5xl grid grid-cols-2 pt-20 " >
        <div className='container mx-auto px-8' >
          <h1 className='font-bold text-4xl pb-5'>
            Magang Diskominfo
          </h1>
          <div className='font-normal text-xl pb-12'>
            Lorem Ipsum is simply dummy text
            of the printing and typesetting industry.
          </div>
          <div className='md:container md:mx-auto font-bold '>
            <button className='py-4 px-10 bg-red-500 rounded-md shadow-xl text-white mr-4'>Daftar Magang</button>
            <button className='py-4 px-10 bg-blue-800 rounded-md shadow-xl text-white'>Informasi Magang</button>
          </div>
        </div>
        <div className='mb-20'>
          <img src={banner} alt="banner" />
        </div>
      </main>

      <alur class=" text-center mt-10">
        <p class="mb-4 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Tata Cara Pendaftaran </p>
        <p class="mb-16 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Magang Diskominfo Kota Semarang</p>
      </alur>

      <div className='container mx-auto pt-5'>
        <div class="flex flex-row gap-4 md:gap-10 lg:gap-10 p-9 ml-28 mr-28 items-center justify-center pb-5">
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">1</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Siapkan surat rekomendasi dari kampus / sekolah</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">2</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Bertemu Pak hanry di lantai 3 kantor diskominfo</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">3</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Anda akan diarahkan ke dosen pembimbing untuk tugasnya</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">4</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Anda akan mendapatkan  Surat kesediaan mitra</span>
          </div>
        </div>
      </div>
      <div class="text-center mt-20">
        <p class="mb-4 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Dashboard Magang Diskominfo  </p>
        <p class="mb-16 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Kota Semarang</p>
      </div>
      <div className='container mx-auto pt-5'>
        <div class="grid grid-cols-2 gap-7 pl-20 pr-20 pb-20">
          <div class="bg-gradient-to-l from-red-300 to-red-200 shadow-xl sha p-10 rounded-md text-black flex">
            <div class="flex-shrink-0 mr-4">
              <h2 class="text-6xl font-medium text-red-600">700</h2>
            </div>
            <div class="flex-grow">
              <p class="text-sm">Mahasiswa dan siswa yang pernah mengikuti magang di Diskominfo Kota Semarang</p>
              <p class="text-sm">Berdasarkan data dari Diskominfo Kota Semarang (2023)</p>
            </div>
          </div>
          <div class="bg-gradient-to-l from-red-300 to-red-200 shadow-xl p-10 rounded-md text-black flex">
            <div class="flex-shrink-0 mr-4">
              <h2 class="text-6xl font-medium text-red-600">700</h2>
            </div>
            <div class="flex-grow">
              <p class="text-sm">Mahasiswa dan siswa yang pernah mengikuti magang di Diskominfo Kota Semarang</p>
              <p class="text-sm">Berdasarkan data dari Diskominfo Kota Semarang (2023)</p>
            </div>
          </div>
          <div class="bg-gradient-to-l from-red-300 to-red-200 shadow-xl p-10 rounded-md text-black flex">
            <div class="flex-shrink-0 mr-4">
              <h2 class="text-6xl font-medium text-red-600">700</h2>
            </div>
            <div class="flex-grow">
              <p class="text-sm">Mahasiswa dan siswa yang pernah mengikuti magang di Diskominfo Kota Semarang</p>
              <p class="text-sm">Berdasarkan data dari Diskominfo Kota Semarang (2023)</p>
            </div>
          </div>
          <div class="bg-gradient-to-l from-red-300 to-red-200 shadow-xl p-10 rounded-md text-black flex">
            <div class="flex-shrink-0 mr-4">
              <h2 class="text-6xl font-medium text-red-600">700</h2>
            </div>
            <div class="flex-grow">
              <p class="text-sm">Mahasiswa dan siswa yang pernah mengikuti magang di Diskominfo Kota Semarang</p>
              <p class="text-sm">Berdasarkan data dari Diskominfo Kota Semarang (2023)</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="text-center mt-10">
          <p class="mb-4 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Apa yang kamu dapatkan di magang  </p>
          <p class="mb-16 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Diskominfo Kota Semarang</p>
        </div>
      </div>
      <div className='container mx-auto pt-5'>
        <div class="flex flex-row gap-4 md:gap-10 lg:gap-10 p-9 ml-28 mr-28 items-center justify-center pb-5">
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">1</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Siapkan surat rekomendasi dari kampus / sekolah</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">2</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Bertemu Pak hanry di lantai 3 kantor diskominfo</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">3</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Anda akan diarahkan ke dosen pembimbing untuk tugasnya</span>
          </div>
          <div class="flex flex-col items-center">
            <div class="w-20 h-20 bg-red-500 shadow-xl rounded-full flex justify-center items-center">
              <span class="text-white font-bold text-2xl">4</span>
            </div>
            <span class="mt-5 text-gray-700 text-center">Anda akan mendapatkan  Surat kesediaan mitra</span>
          </div>
        </div>
      </div>

      <div class="text-center mt-20">
        <p class="mb-9 font-semibold text-2xl text-black lg:text-xl sm:px-16 xl:px-48">Pertanyaan yang paling sering ditanyakan</p>
      </div>
      <div className='container font-light mx-auto mb-10 border-spacing-2 flex flex-col gap-4 text-center'>
        <button className='bg-slate-100 p-4 rounded-md shadow-xl flex items-center w-full'>
          <span className='flex-grow text-center'>Mengapa saya tidak mendapatkan email verifikasi?</span>
          <img className='w-6 h-6 ml-auto' src={logo2} alt='read more' />
        </button>
        <button className='bg-slate-100 p-4 rounded-md shadow-xl flex items-center w-full'>
          <span className='flex-grow text-center'>Mengapa saya tidak mendapatkan email verifikasi?</span>
          <img className='w-6 h-6 ml-auto' src={logo2} alt='read more' />
        </button>
        <button className='bg-slate-100 p-4 rounded-md shadow-xl flex items-center w-full'>
          <span className='flex-grow text-center'>Mengapa saya tidak mendapatkan email verifikasi?</span>
          <img className='w-6 h-6 ml-auto' src={logo2} alt='read more' />
        </button>
        <button className='bg-slate-100 p-4 rounded-md shadow-xl flex items-center w-full'>
          <span className='flex-grow text-center'>Mengapa saya tidak mendapatkan email verifikasi?</span>
          <img className='w-6 h-6 ml-auto' src={logo2} alt='read more' />
        </button>
      </div>
    </div>
  )
}


export default Dashobard