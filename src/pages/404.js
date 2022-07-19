import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <div>
    <Seo title="404 - Halaman Tidak Ditemukan" />
    <div className="flex h-screen">
      <div className="m-auto text-center space-y-6">
        <h1 className="text-7xl md:text-9xl font-bold text-transparent tracking-wider bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500">404</h1>
        <span className="text-lg md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-500 block">Halaman Tidak Ditemukan</span>
        <p className="text-lg text-gray-500 font-medium">Sepertinya kamu tersesat! Halaman yang kamu inginkan tidak ditemukan.</p>

        <Link to="/"
        className="inline-block px-6 py-4 rounded-lg shadow-2xl font-medium text-white shadow-blue-600 bg-blue-600 transition duration-500 ease-in-out hover:-translate-y-1"
        >
            Kembali ke Halaman Utama
        </Link>
      </div>
    </div>
  </div>
)

export default NotFoundPage
