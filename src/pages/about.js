import React from "react"

import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const timeline = [
  {
    title: "2013 - Freelance at Solo",
    description: "",
  },
  {
    title: "2014 - Work at Ngarsapura Creative Media",
    description: "",
  },
  {
    title: "2016 - Lulus S1 Informatika UNS",
    description: "",
  },
  {
    title: "2017 - Work at Gamatechno Jogja",
    description: "",
  },
  {
    title: "2018 - Work at Kadang Koding Indonesia",
    description: "",
  },
  {
    title: "2020 - Remote Freelance",
    description: "",
  },
]

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
          Akhir-akhir ini fokus koding menggunakan Laravel untuk membuat API
          atau full website. Sedangkan Javascript saya gunakan untuk membuat
          static website seperti{" "}
          <a href="https://farm.sukepangon.com">Suke Pangon Farm</a>.
        </p>
        <p>
          Saya membuat halaman <a href="/uses/">/uses</a> berisi daftar aplikasi
          yang biasa saya pakai.
        </p>
      </div>
      {/* <div className="mt-8">
        <h2 className="mb-4 text-lg font-bold tracking-normal text-gray-900 md:text-xl dark:text-gray-100">
          Timeline
        </h2>
        <ul className="space-y-4">
          {timeline.reverse().map((item, index) => (
            <li className="flex items-start" key={index}>
              <svg className="w-5 h-5 mt-1 text-gray-600" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </g>
              </svg>
              <div className="ml-3">
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {item.title}
                </p>
                <p className="text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </article>
  </Layout>
)

export default AboutPage
