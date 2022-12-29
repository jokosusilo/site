import Layout from '../components/layout-article'
import Head from 'next/head'
import Header from '../components/header'
import PageTitle from '../components/page-title'

export default function Uses() {
  return (
    <>
      <Head>
        <title>About Me - Joko Susilo</title>
      </Head>
      <Layout>
        <Header />
        <article className="flex-1 w-full max-w-3xl p-4 -mt-12 bg-white rounded-sm shadow-sm md:mt-0 md:p-8 md:mx-auto">
          <PageTitle>About</PageTitle>
          <div className="mt-6 prose">
            <p>Yo! Selamat datang di website ini.</p>
            <p>
              Saya seorang freelance web developer dari Ngawi, Jawa Timur.
              {/* Sebelumnya saya bekerja di <a href="https://kadangkoding.com">Kadang Koding Indonesia</a>. */}
            </p>
            <p>
              Akhir-akhir ini fokus koding menggunakan Laravel untuk membuat API
              atau full website. Sedangkan Javascript saya gunakan untuk membuat
              static website seperti{" "}
              <a href="https://farm.sukepangon.com">Suke Pangon Farm</a>.
            </p>
            <p>
              Saya membuat halaman <a href="/uses/">/uses</a> berisi daftar
              aplikasi yang biasa saya pakai.
            </p>
          </div>
        </article>
      </Layout>
    </>
  )
}
