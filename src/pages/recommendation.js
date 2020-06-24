import React from "react"
import Layout from "../components/layout"
import PageTitle from "../components/page-title"
import RecommendationLink from "../components/recommendation-link"
import SEO from "../components/seo"

import recommendationArticle from "../content/recommendation-article.json"
import recommendationVideo from "../content/recommendation-video.json"

const RecommendationPage = () => (
  <Layout>
    <SEO title="Recommendation" description="Collection of link, video or other resource to level up your skills." />

    <PageTitle>Recommendation</PageTitle>
    <p className="mt-2 text-gray-700">
      Collection of link, video or other resource to level up your skills.
    </p>

    <h2 className="mt-8 text-3xl">Article</h2>
    <div className="space-y-2">
      {recommendationArticle.map((item, index) => (
        <RecommendationLink key={index} type="article" title={item.title} link={item.link} />
      ))}
    </div>

    <h2 className="mt-8 text-3xl">Video</h2>
    <div className="space-y-2">
      {recommendationVideo.map((item, index) => (
        <RecommendationLink key={index} type="video" title={item.title} link={item.link} />
      ))}
    </div>
  </Layout>
)

export default RecommendationPage
