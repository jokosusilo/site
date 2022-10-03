import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import PageTitle from '../components/page-title'

import bookmarkArticle from '../content/bookmark-article.json';
import bookmarkVideo from '../content/bookmark-video.json';
import BookmarkLink from '../components/bookmark-link'

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
              <BookmarkLink
                key={index}
                type="article"
                title={item.title}
                link={item.link}
              />
            ))}
          </div>

          <h2 className="mt-8 text-xl font-semibold">Video</h2>
          <div className="mt-3 space-y-2">
            {bookmarkVideo.map((item, index) => (
              <BookmarkLink
                key={index}
                type="video"
                title={item.title}
                link={item.link}
              />
            ))}
          </div>
        </article>
      </Layout>
    </>
  );
}
