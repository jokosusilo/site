import Layout from '../components/layout-article'
import Head from 'next/head'
import Header from '../components/header'
import PageTitle from '../components/page-title'
import latestWork from "../content/work.json"

export default function Uses() {
  return (
    <>
      <Head>
        <title>About Me - Joko Susilo</title>
      </Head>
      <Layout>
        <Header />
        <article className="flex-1 w-full max-w-3xl p-4 -mt-12 md:mt-0 md:p-8 md:mx-auto">
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
          <div className="mt-8">
            <h2 className="text-2xl">Work</h2>
            <ol className="relative pl-4 mt-6 ml-5 space-y-8 border-l border-gray-200 dark:border-gray-700">
              {latestWork.map((item, index) => (
                <li key={index} className="ml-4">
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-indigo-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-indigo-900 ">
                    <svg
                      className="w-2.5 h-2.5 text-indigo-800 dark:text-indigo-300"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                  </span>
                  <div className="p-4 bg-white border border-indigo-100 rounded-md hover:bg-indigo-50 hover:border-indigo-400 hover:cursor-pointer">
                    <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                      {item.year}
                    </time>
                    <h3 className="flex items-center text-lg text-gray-900 dark:text-white">
                      {item.title} - {item.company}
                    </h3>
                    {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                      {item.description}
                    </p>
                    <div className='text-indigo-500'>
                      {item.tags}
                    </div> */}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </article>
      </Layout>
    </>
  )
}
