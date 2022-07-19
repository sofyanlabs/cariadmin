import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const Marketplace = () => (
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
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
    </section>

  </Layout>
)

export default Marketplace
