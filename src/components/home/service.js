import * as React from "react"
import { Link } from "gatsby"
import CTAkonsul from "../ctakonsultasi"

import { 
  Desain,
  Foto,
  Marketing,
  Marketplace, 
  SocialMedia,
  Website
} from "../img/seviceimg"

const services = [
  {
    id:'1',
    delay: '200',
    image: Marketplace,
    title: 'Marketplace',
    description: 'Optimasi toko di marketplace seperti peningkatan layanan chat ke pelanggan hingga iklankan produk.',
    href: '#',
  },
  {
    id:'2',
    delay: '300',
    image: SocialMedia,
    title: 'Social Media',
    description: 'Pengelolaan dan manajemen akun Sosial Media untuk meningkatkan minat dan jangkauan pembeli.',
    href: '#',
  },
  {
    id:'3',
    delay: '400',
    image: Website,
    title: 'Website',
    description: 'Pembuatan dan pengelolaan website profesional dengan teknologi serta desain terkini.',
    href: '#',
  },
  {
    id:'4',
    delay: '200',
    image: Marketing,
    title: 'Digital Marketing',
    description: 'Pengelolaan dan optimasi strategi iklan digital untuk meningkatkan jangkauan pembeli.',
    href: '#',
  },
  {
    id:'5',
    delay: '300',
    image: Desain,
    title: 'Desain Grafis',
    description: 'Pembuatan kebutuhan desain grafis profesional untuk meningkatkan branding usaha.',
    href: '#',
  },
  {
    id:'6',
    delay: '400',
    image: Foto,
    title: 'Foto Produk',
    description: 'Pembuatan foto produk yang menarik dan berkualitas untuk katalog produk secara digital.',
    href: '#',
  },
]

const ServiceHome = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-12">
    <div className="max-w-2xl mx-auto text-center">
      <div
        className="pb-12"
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="100"
      >
        <span className="block font-medium text-md md:text-xl text-blue-600">Solusi Bisnis Online</span>
        <h2 className="font-bold text-xl md:text-3xl py-4 !leading-relaxed text-gray-800">Pilihan Layanan Terlengkap dan Terbaik untuk <span className="underline underline-offset-8 decoration-blue-600">Solusi Masalah Bisnis Online</span></h2>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((item) => (
      <div 
      key={item.id}
      data-sal="slide-up"
      data-sal-duration="500"
      data-sal-delay={item.delay}
      className="rounded-3xl p-8 border border-blue-50 bg-gradient-to-b from-blue-50 to-blue-0 transition hover:-translate-y-2 hover:to-blue-100"
      >
        <div className="space-y-4">
          <div className="w-20">
            <item.image />
          </div>
          <h3 className="font-medium text-xl text-gray-800">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
          <Link to={item.href}
          className="block relative pl-12 font-medium text-gray-600 hover:text-blue-600 before:block before:w-10 before:h-1 before:rounded-xl before:bg-gray-600 before:absolute before:left-0 before:top-2/4 hover:before:bg-blue-500">
          Lihat Selengkapnya
          </Link>
        </div>
      </div>
      ))}
    </div>
    <CTAkonsul />
  </section>
)
  
  export default ServiceHome

