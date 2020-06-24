import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" description="A little bit about me"/>
    <article>
      <PageTitle>About</PageTitle>
      <div className="content">
        <p>Hi!. Welcome to my site.</p>
        <p>
          I'm a web developer. Currently working at{" "}
          <a href="https://kadangkoding.com">
            Kadang Koding Indonesia
          </a>
          .
        </p>
      </div>
    </article>
  </Layout>
)

export default AboutPage
