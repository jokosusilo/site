import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Helmet from 'react-helmet'
import Header from "./header"
import Footer from "./footer"

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
      <Helmet>
        <body className="flex flex-col justify-between min-h-screen font-sans text-base leading-normal text-black" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className="container flex-1 w-full max-w-3xl px-4 pt-12 mx-auto md:pt-24">
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout