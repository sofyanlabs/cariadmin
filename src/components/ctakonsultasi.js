import * as React from "react"
import {
    SpeakerphoneIcon,
  } from '@heroicons/react/outline'

const CTAkonsul = () => (
    <div 
    data-sal="slide-up"
    data-sal-duration="500"
    data-sal-delay="300"
    className="mt-12 text-center">
        <div className="py-4 px-6 rounded-full border border-gray-200 inline-block">
            <div className="flex space-x-3">
                <SpeakerphoneIcon className="w-12 md:w-6 text-blue-600"/>
                <span className="text-gray-600">Ingin tahu layanan yang sesuai untuk kamu? <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">Konsultasi sekarang!</a></span>
            </div>
        </div>
    </div>
)

export default CTAkonsul
