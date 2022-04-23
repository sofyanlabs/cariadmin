import { Link } from "gatsby"
import * as React from "react"

const CTAbottom = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        <div
        data-sal="slide-up"
        data-sal-duration="500"
        data-sal-delay="200" 
        className="bg-gradient-to-br md:bg-gradient-to-r from-blue-800 to-blue-500 p-8 md:p-16 rounded-3xl">
            <div className="flex flex-wrap justify-center md:justify-between text-white md:items-center">
                <div className="max-w-xs lg:max-w-sm text-center md:text-left pb-8 md:pb-0">
                    <h2 className="text-xl lg:text-3xl font-bold !leading-tight tracking-wide">Mulai #BangunBersama Bisnismu Hari Ini.</h2>
                </div>
                <Link to="/"
                className="inline-block px-8 py-4 rounded-lg shadow-2xl font-medium text-blue-600 bg-white transition duration-500 ease-in-out hover:-translate-y-1"
                >
                    Konsultasi Sekarang
                </Link>
            </div>
        </div>
    </section>
)

export default CTAbottom
