import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroHome = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-0 py-12 lg:py-20">
        <div className="flex flex-wrap items-center">
            <div 
                className="w-full lg:w-1/2 md:pr-10 mb-20 lg:mb-0"
                data-sal="slide-up"
                data-sal-duration="1000"
                data-sal-delay="100"
            >

                <h1 className="text-4xl md:text-5xl xl:text-6xl !leading-tight font-bold text-gray-800 mb-4">Kini Kembangkan Bisnis Jadi Lebih Mudah</h1>
                <p className="text-base md:text-xl text-gray-600 mb-12">Bangun bisnis online bersama admin professional dari Cariadmin. Nikmati kemudahan, hemat waktu dan biaya hingga jutaan rupiah!</p>
                <Link to="/"
                className="inline-block px-6 py-4 text-lg rounded-lg shadow-lg font-medium text-white shadow-blue-500 bg-blue-500 transition duration-500 ease-in-out hover:-translate-y-1"
                >
                    Cari Admin Professional
                </Link>
                
            </div>
            <div className="w-full lg:w-1/2">
                <div className="relative">
                    <div className="text-center"
                        data-sal="zoom-in"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                    >
                    <StaticImage 
                        src="../../images/hero-background.png"
                        alt="Background Hero Cariadmin"
                        placeholder="tracedSVG"
                    />
                    </div>
                    <div className="absolute m-auto bottom-0 right-0 w-4/5"
                        data-sal="slide-left"
                        data-sal-duration="1000"
                        data-sal-delay="800"
                    >
                    <StaticImage 
                        src="../../images/hero-person.png"
                        alt="Person Hero Cariadmin"
                        placeholder="tracedSVG"
                    />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
  
  export default HeroHome