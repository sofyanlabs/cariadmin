import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutHome = () => (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
      <div className="bg-blue-50 pt-16 px-4 rounded-5xl">
        <div className="max-w-2xl mx-auto text-center">
          <div
            className="pb-12"
            data-sal="slide-up"
            data-sal-duration="1000"
            data-sal-delay="300"
          >
            <span className="block font-bold text-md md:text-xl text-blue-600">Apa itu Cariadmin?</span>
            <h2 className="font-bold text-xl md:text-3xl py-6 !leading-relaxed text-gray-800">Penyedia layanan admin profesional untuk <span className="underline underline-offset-8 decoration-blue-600">meningkatkan kinerja bisnis online kamu</span></h2>
            <p className="text-base text-gray-600 md:text-xl md:px-8">Kami akan memberikanmu admin professional yang terbaik di bidangnya. Pilihan admin yang tepat akan sangat meningkatkan kinerja pada bisnis online yang kamu miliki.</p>
          </div>
          <div
            data-sal="slide-left"
            data-sal-duration="1000"
            data-sal-delay="500"
          >
            <StaticImage 
              src="../../images/about-person.png"
              alt="Table About Cariadmin"
              placeholder="tracedSVG"
            />
          </div>
        </div>
      </div>
    </section>
  )
  
  export default AboutHome