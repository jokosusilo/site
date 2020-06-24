import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <PageTitle>NOT FOUND</PageTitle>
    <p className="mt-4 text-gray-800">You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
