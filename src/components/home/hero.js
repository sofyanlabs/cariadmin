import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const HeroHome = () => (
    <div className="flex flex-wrap items-center">
        <div 
            className="w-full lg:w-1/2 md:pr-10 mb-12 lg:mb-0"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="100"
        >

            <h1 className="text-4xl md:text-5xl xl:text-6xl !leading-tight font-bold text-gray-900 mb-4">Kini Kembangkan Bisnis Jadi Lebih Mudah</h1>
            <p className="text-base md:text-xl text-gray-700 mb-8">Bangun bisnis bersama admin professional dari Cariadmin. Nikmati kemudahan, hemat waktu dan biaya hingga jutaan rupiah!</p>
            <Link to="#"
               className="px-6 py-4 text-lg rounded-md shadow-lg shadow-blue-500 font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
                Cari Admin Professional
            </Link>
            
        </div>
        <div className="w-full lg:w-1/2 py-12">
            <div className="relative">
                <div className="text-center"
                data-sal="zoom-in"
                data-sal-duration="500"
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
                data-sal-delay="1000"
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
  )
  
  export default HeroHome