import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { CheckCircleIcon } from "@heroicons/react/solid"

import { 
    Desain,
    Foto,
    Marketing,
    Marketplace, 
    SocialMedia,
    Website
  } from "../../components/img/seviceimg"

const services = [
    {
      id:'1',
      delay: '200',
      image: Marketplace,
      title: 'Marketplace',
      description: 'Optimasi toko di marketplace seperti peningkatan layanan chat ke pelanggan hingga iklankan produk.',
      href: '/layanan/jasa-admin-marketplace',
    },
    {
      id:'2',
      delay: '300',
      image: SocialMedia,
      title: 'Sosial Media',
      description: 'Pengelolaan dan manajemen akun Sosial Media untuk meningkatkan minat dan jangkauan pembeli.',
      href: '/layanan/jasa-admin-sosial-media',
    },
    {
      id:'3',
      delay: '400',
      image: Website,
      title: 'Website',
      description: 'Pembuatan dan pengelolaan website profesional dengan teknologi serta desain terkini.',
      href: '/layanan/jasa-admin-website',
    },
    {
      id:'4',
      delay: '200',
      image: Marketing,
      title: 'Digital Marketing',
      description: 'Pengelolaan dan optimasi strategi iklan digital untuk meningkatkan jangkauan pembeli.',
      href: '/layanan/jasa-admin-digital-marketing',
    },
    {
      id:'5',
      delay: '300',
      image: Desain,
      title: 'Desain Grafis',
      description: 'Pembuatan kebutuhan desain grafis profesional untuk meningkatkan branding usaha.',
      href: '/layanan/jasa-admin-desain-grafis',
    },
    {
      id:'6',
      delay: '400',
      image: Foto,
      title: 'Foto Produk',
      description: 'Pembuatan foto produk yang menarik dan berkualitas untuk katalog produk secara digital.',
      href: '/layanan/jasa-admin-foto-produk',
    },
]

const MarketplacePage = () => (
  <Layout>
    <Seo title="Jasa Admin Marketplace Termurah &amp; Terpercaya"/>

    {/* Section Header */}
    <section className="bg-gradient-to-br md:bg-gradient-to-r from-blue-800 to-blue-500">
        <div
        className="py-16 px-4 text-center">
            <div className="text-white space-y-6">
                <h1 className="text-2xl md:text-4xl font-medium">Jasa Admin Marketplace</h1>
                <p className="text-base md:text-lg">Solusi untuk meningkatkan kualitas pelayanan bisnis toko online kepada pelanggan.</p>

                <nav className="flex justify-center" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                        <Link to="/" className="inline-flex items-center text-sm font-medium text-white hover:text-gray-200">
                            <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            Halaman Utama
                        </Link>
                        </li>
                        <li>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                            <Link to="/" className="ml-1 text-sm font-medium text-white hover:text-gray-200">Layanan</Link>
                        </div>
                        </li>
                        <li aria-current="page">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path></svg>
                            <span className="ml-1 text-sm font-medium text-gray-200 md:ml-2">Marketplace</span>
                        </div>
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
    </section>
    
    {/* Section Left */}
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-24">
        <div className="flex flex-wrap items-center ">
            <div class="w-full lg:w-1/2 text-center mb-8 lg:mb-8">
                <StaticImage 
                src="../../images/marketplace-admin.png"
                className="w-72 md:w-auto"
                alt="Gambar Jasa Admin Marketplace Cariadmin"/>
            </div>
            <div class="w-full lg:w-1/2 lg:max-w-xl">
                <h2 className="text-2xl md:text-3xl leading-tight font-bold text-gray-800 mb-6">
                    Tingkatkan Kualitas Admin Bisnis Online Lebih Efisien!
                </h2>
                <p className="text-base md:text-lg text-gray-600">
                    Cariadmin membantu para pebisnis online untuk memiliki admin terlatih dan berpengalaman dalam pelayanan pelanggan yang profesional dengan harga terjangkau.
                    Sehingga kamu bisa lebih fokus dalam pengembangan bisnis saja.
                </p>
                <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                        <CheckCircleIcon className="w-8 text-blue-500 mr-4 block"/> 
                        <p className="text-base md:text-lg text-gray-600">Layanan pelanggan responsif (&lt;5 menit)</p>
                    </div>
                    <div className="flex items-center">
                        <CheckCircleIcon className="w-8 text-blue-500 mr-4 block"/> 
                        <p className="text-base md:text-lg text-gray-600">Admin terlatih dengan kurikulum terbaru</p>
                    </div>
                    <div className="flex items-center">
                        <CheckCircleIcon className="w-8 text-blue-500 mr-4 block"/> 
                        <p className="text-base md:text-lg text-gray-600">Hemat biaya sesuai dengan kebutuhan bisnis</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
            <div className="pb-12">
                <span className="block font-medium text-md md:text-xl text-blue-600">Keuntungan</span>
                <h2 className="font-bold text-2xl md:text-3xl py-4 !leading-relaxed text-gray-800">Alasan Kenapa Harus <span className="underline underline-offset-8 decoration-blue-600">#BangunBersama</span> Admin Marketplace Cariadmin</h2>
            </div> 
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item) => (
            <div 
            className="rounded-3xl p-8 bg-blue-50"
            >
                <div className="space-y-4">
                    <div className="w-16">
                        <item.image />
                    </div>
                <h3 className="font-medium text-xl text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                </div>
            </div>
            ))}
        </div>
    </section>

    <section className="py-12">

    </section>

  </Layout>
)

export default MarketplacePage
