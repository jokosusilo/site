import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import PageTitle from '../components/page-title'

import bookmarkArticle from '../content/bookmark-article.json';
import bookmarkVideo from '../content/bookmark-video.json';
import BookmarkLink from '../components/bookmark-link'
import Link from 'next/link';

export default function Uses() {
  return (
    <>
      <Head>
        <title>Bookmark - Joko Susilo</title>
      </Head>
      <Layout>
        <Header />
        <article className="max-w-3xl mx-4 md:mx-auto">
          <PageTitle>Bookmark</PageTitle>
          <p className="mt-2 text-gray-700">
            Collection of link, video or other resource to level up your skills.
          </p>

          <h2 className="mt-8 text-xl font-semibold">Article</h2>
          <div className="mt-3 space-y-2">
            {bookmarkArticle.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                rel="nofollow"
                className="block p-6 transition border border-transparent rounded-sm group hover:bg-white bg-gray-50 hover:border-black"
              >
                <div className="text-lg">{item.title}</div>
                <div className="flex items-center text-sm text-gray-500 group-hover:text-indigo-500">
                  <span>{item.link}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hidden w-3 h-3 ml-1 sm:inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <h2 className="mt-8 text-xl font-semibold">Video</h2>
          <div className="mt-3 space-y-2">
            {bookmarkVideo.map((item, index) => (
              <Link
                href={item.link}
                target="_blank"
                rel="nofollow"
                className="block p-6 transition border border-transparent rounded-sm group hover:bg-white bg-gray-50 hover:border-black"
              >
                <div className="text-lg">{item.title}</div>
                <div className="flex items-center text-sm text-gray-500 group-hover:text-indigo-500">
                  <span>{item.link}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="hidden w-3 h-3 ml-1 sm:inline"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </Layout>
    </>
  )
}
