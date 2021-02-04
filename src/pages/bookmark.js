import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import BookmarkLink from "../components/bookmark-link"
import SEO from "../components/seo"

import bookmarkArticle from "../content/bookmark-article.json"
import bookmarkVideo from "../content/bookmark-video.json"

const BookMarkPage = () => (
  <Layout>
    <SEO title="Bookmark" description="Collection of link, video or other resource to level up your skills." />

    <PageTitle>Bookmark</PageTitle>
    <p className="mt-2 text-gray-700">
      Collection of link, video or other resource to level up your skills.
    </p>

    <h2 className="mt-8 text-3xl">Article</h2>
    <div className="mt-3 space-y-2">
      {bookmarkArticle.map((item, index) => (
        <BookmarkLink key={index} type="article" title={item.title} link={item.link} />
      ))}
    </div>

    <h2 className="mt-8 text-3xl">Video</h2>
    <div className="mt-3 space-y-2">
      {bookmarkVideo.map((item, index) => (
        <BookmarkLink key={index} type="video" title={item.title} link={item.link} />
      ))}
    </div>
  </Layout>
)

export default BookMarkPage
