import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About Me" description="A little bit about me" />
    <article>
      <PageTitle>About</PageTitle>
      <div className="mt-5 prose max-w-none">
        <p>Yo! Selamat datang di website ini.</p>
        <p>
          Saya seorang freelance web developer dari Ngawi, Jawa Timur.
          {/* Sebelumnya saya bekerja di <a href="https://kadangkoding.com">Kadang Koding Indonesia</a>. */}
        </p>
        <p>
          Akhir-akhir ini fokus koding menggunakan Laravel untuk membuat API atau full website.
          Sedangkan Javascript saya gunakan untuk membuat static website seperti <a href="https://farm.sukepangon.com">Suke Pangon Farm</a>.
        </p>
        <p>
          Saya membuat halaman <a href="/uses/">/uses</a> untuk menulis daftar aplikasi yang biasa saya pakai.
        </p>
      </div>
    </article>
  </Layout>
)

export default AboutPage
