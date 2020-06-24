import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import ArticleList from "../components/article-list"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const ArticlesPage = function({ data }){
  return (
    <Layout>
      <SEO title="Articles" description="The list articles from Joko Susilo" />

      <PageTitle>
        Articles
      </PageTitle>

      <div className="mt-8 space-y-12">
        {data.allMarkdownRemark.edges.map(({ node }, index) => (
          <ArticleList key={index} node={node}></ArticleList>
        ))}
      </div>
    </Layout>
  )
}

export default ArticlesPage

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { published: { eq: true } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          excerpt(format: PLAIN)
          fields {
            slug
          }
          frontmatter {
            title
            date
            draft
          }
        }
      }
    }
  }
`