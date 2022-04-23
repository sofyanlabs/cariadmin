import React, { useEffect, useState } from "react"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Popover, Transition } from "@headlessui/react"
import {
  CameraIcon,
  GlobeAltIcon,
  MenuIcon,
  PresentationChartLineIcon,
  ShoppingBagIcon,
  SparklesIcon,
  TemplateIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const layanan = [
  {
    name: 'Admin Marketplace',
    description: 'Optimasi Toko Online',
    href: '/',
    icon: ShoppingBagIcon,
  },
  {
    name: 'Admin Social Media',
    description: 'Manajemen Sosial Media',
    href: '/',
    icon: TemplateIcon,
  },
  { name: 'Admin Website', 
    description: "Pembuatan Website Profesional", 
    href: '/', 
    icon: GlobeAltIcon },
  {
    name: 'Admin Digital Marketing',
    description: "Manajemen iklan digital",
    href: '/',
    icon: PresentationChartLineIcon,
  },
  {
    name: 'Admin Desain Grafis',
    description: "Solusi Desain Profesional",
    href: '/',
    icon: SparklesIcon,
  },
  {
    name: 'Admin Foto Produk',
    description: "Jasa Foto Produk",
    href: '/',
    icon: CameraIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header ({ siteTitle })
{
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  return (
    <Popover 
    className={classNames(
      small ? 'sticky top-0 shadow-md py-4' : 'relative py-6', 'bg-white z-10'
    )} as="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">{siteTitle}</span>
                <StaticImage
                  src="../images/cariadmin-logo.png"
                  width={200}
                  alt="Cariadmin Logo"
                />
            </Link>
          </div>
            <div className="-mr-2 -my-2 lg:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-blue-600 hover:text-blue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
  
          <Popover.Group as="nav" className="hidden items-center lg:flex space-x-10">
            <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-gray-900' : 'text-gray-800',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:text-blue-600'
                      )}
                    >
                      <span className="text-lg">Layanan</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-800',
                          'ml-2 h-6 w-6 group-focus:text-blue-600'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>
  
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xl sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid grid-cols-2 gap-6 bg-white px-5 py-6 sm:p-8">
                            {layanan.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon className="flex-shrink-0 h-8 w-8 text-blue-600" aria-hidden="true" />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </a>
                            ))}
                          </div>
                          <a href="/" className="px-5 py-5 bg-blue-600 text-lg flex justify-center hover:bg-blue-700 text-white font-medium leading-relaxed">
                            Konsultasi Bisnis Sekarang!
                          </a>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            
            <Link to="/" className="text-lg font-medium text-gray-800 hover:text-blue-600">Tentang</Link>
            <Link to="/" className="text-lg font-medium text-gray-800 hover:text-blue-600">Bantuan</Link>
            <Link to="/" className="text-lg font-medium text-gray-800 hover:text-blue-600">Kontak</Link>
          </Popover.Group>
        </div>
      </div>
  
      <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                  <StaticImage
                    src="../images/cariadmin-logo.png"
                    width={150}
                    alt="Cariadmin Icon"
                  />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid md:grid-cols-2 gap-y-8">
                    {layanan.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon className="flex-shrink-0 h-6 w-6 text-blue-600" aria-hidden="true" />
                        <span className="ml-3 text-base font-medium text-gray-900">{item.name}</span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Tentang</Link>
                  <Link to="/" className="text-base font-medium text-gray-900 hover:text-gray-700">Bantuan</Link>
                </div>
                <div>
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-4 py-2 rounded-lg shadow-lg shadow-blue-600 text-white font-medium bg-blue-600"
                  >
                    Cari Admin Professional
                  </a>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
    </Popover>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}