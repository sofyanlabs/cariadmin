import * as React from "react"
import {
    CheckCircleIcon,
    XCircleIcon
  } from '@heroicons/react/solid'

const WhyHome = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
      <div className="bg-blue-50 py-16 px-4 rounded-5xl">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="pb-12"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            <span className="block font-medium text-md md:text-xl text-blue-600">Keuntungan</span>
            <h2 className="font-bold text-xl md:text-3xl py-4 !leading-relaxed text-gray-800"><span className="underline underline-offset-8 decoration-blue-600">#BangunBersama</span> Admin Profesional Cariadmin</h2>
            <p className="text-base text-gray-600 md:text-xl md:px-8">Cariadmin merupakan layanan admin profesional terlengkap yang memberikan kemudahan dalam pengembangan bisnis online dengan biaya yang terjangkau.</p>
          </div> 
        </div>
        <div
        data-sal="slide-left"
        data-sal-duration="1000"
        data-sal-delay="500"
        className="max-w-3xl mx-auto relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-800 md:table-fixed">
                <thead className="text-base border-b border-blue-300">
                    <tr className="whitespace-nowrap">
                        <th scope="col" className="px-6 py-3 border-r border-blue-300">
                            
                        </th>
                        <th scope="col" className="px-6 py-3 border-blue-300 text-center">
                            Kelola Tim Sendiri
                        </th>
                        <th scope="col" className="px-6 py-3 text-center bg-blue-700 rounded-t-2xl text-white">
                            Admin Cariadmin
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-blue-300 text-center">
                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Biaya Gaji Tim
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                            <CheckCircleIcon className="w-6 text-red-500 mx-auto"/>
                            Perlu banyak karyawan untuk satu layanan
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white">
                            <CheckCircleIcon className="w-6 text-green-500 mx-auto"/>
                            Sudah disusaikan dengan kebutuhan bisnis
                        </td>
                    </tr>
                    <tr className="border-b border-blue-300 text-center bg-blue-100">
                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Biaya Pelatihan Tim
                        </td>
                        <td className="px-6 py-4">
                            <CheckCircleIcon className="w-6 text-red-500 mx-auto"/>
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white">
                            <span className="py-1 px-4 bg-green-200 text-green-700 rounded-full">Tidak Perlu</span>
                        </td>
                    </tr>
                    <tr className="border-b border-blue-300 text-center">
                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Ruang Kantor Tambahan
                        </td>
                        <td className="px-6 py-4">
                            <CheckCircleIcon className="w-6 text-red-500 mx-auto"/>
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white">
                            <span className="py-1 px-4 bg-green-200 text-green-700 rounded-full">Tidak Perlu</span>
                        </td>
                    </tr>
                    <tr className="border-b border-blue-300 text-center bg-blue-100">
                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Hemat Waktu
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                            <XCircleIcon className="w-6 text-red-500 mx-auto"/>
                            Perlu waktu untuk mencari karyawan yang sesuai
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white">
                            <CheckCircleIcon className="w-6 text-green-500 mx-auto"/>
                            Admin sudah dilatih bersama tim profesional
                        </td>
                    </tr>
                    <tr className="border-b border-blue-300 text-center">

                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Kualitas Pekerjaan
                        </td>
                        <td className="px-6 py-4 text-gray-500">
                            <XCircleIcon className="w-6 text-red-500 mx-auto"/>
                            Semakin profesional maka gaji semakin besar
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white">
                            <CheckCircleIcon className="w-6 text-green-500 mx-auto"/>
                            Sudah melewati standarisasi terbaik di bidangnya
                        </td>
                    </tr>
                    <tr className="border-b border-blue-300 text-center bg-blue-100">
                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Memahami Kebutuhan Digital Terkini
                        </td>
                        <td className="px-6 py-4">
                            <span className="py-1 px-4 bg-red-200 text-red-700 rounded-full">Belum Tentu</span>
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white">
                            <CheckCircleIcon className="w-6 text-green-500 mx-auto"/>
                            Kami selalu evaluasi terhadap perkembangan digital
                        </td>
                    </tr>
                    <tr className="text-center">
                        <td className="px-6 py-4 border-r border-blue-300 text-left text-base">
                            Dukungan Laporan Bisnis
                        </td>
                        <td className="px-6 py-4">
                            <span className="py-1 px-4 bg-red-200 text-red-700 rounded-full">Belum Tentu</span>
                        </td>
                        <td className="px-6 py-4 bg-blue-700 text-white rounded-b-2xl">
                            <CheckCircleIcon className="w-6 text-green-500 mx-auto"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </section>
  )
  
  export default WhyHome