/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`}/>
      <div className="overflow-x-hidden">
        <main>{children}</main>
        
        <footer className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-12">
            <div className="space-y-4 col-span-2">
                <StaticImage
                  src="../images/cariadmin-logo.png"
                  width={180}
                  alt="CariLogo"
                />
                <h3 className="sr-only">Cariadmin</h3>
                <p className="text-gray-500 max-w-xs">Cariadmin merupakan penyedia layanan admin professional terbaik untuk membantu dan meningkatkan usaha bisnis online di indonesia.</p>
            </div>
            <div>
              <span className="font-medium inline-block pb-4 text-lg text-gray-800">Layanan</span>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/" className="hover:text-blue-600">Marketplace</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Sosial Media</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Website</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600" >Desain Grafis</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Foto Produk</Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-medium inline-block pb-4 text-lg text-gray-800">Perusahaan</span>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/" className="hover:text-blue-600">Tentang</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Kontak</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Portofolio</Link>
                </li>
                <li>
                  <Link to="/" className="hover:text-blue-600">Karir</Link>
                </li>
              </ul>
            </div>
            <div>
              <span className="font-medium inline-block pb-4 text-lg text-gray-800">Bantuan</span>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>
                  <b>E-mail</b> <br />
                  helo@cariadmin.com
                </li>
                <li>
                  <b>Whatsapp</b> <br />
                  +62 813 1510 4352
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-4 text-center mt-12">
            <span className="text-gray-500">Copyright © 2022 Cariadmin Indonesia</span>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
