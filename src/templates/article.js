import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageTitle from "../components/page-title"
import convertDate from "../utils"

const Article = ({ data, pageContext }) => {
  const prev = pageContext.prev
    ? {
      url: pageContext.prev.fields.slug,
      title: pageContext.prev.frontmatter.title
    }
    : null

  const next = pageContext.next
    ? {
      url: pageContext.next.fields.slug,
      title: pageContext.next.frontmatter.title
    }
    : null

  const post = data.markdownRemark

  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.frontmatter.description} />

      <article>
        <div className="flex items-center text-sm text-gray-700">
          {convertDate(post.frontmatter.date)}
        </div>
        <PageTitle>
          {post.frontmatter.title}
          {post.frontmatter.draft && (
            <span className="text-red-600"> - Draft</span>
          )}
        </PageTitle>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="mt-5 prose max-w-none"
        />

        <nav className="flex flex-col justify-between mt-16 -mx-2 space-y-2 text-sm md:space-y-0 md:flex-row md:text-base">
          <div className="w-full px-2 md:w-1/2">
            {prev && (
              <Link
                to={prev.url}
                className="flex flex-col p-4 text-left border border-gray-400 rounded hover:bg-gray-100 hover:border-gray-300"
                title={`Previous Post ${prev.title}`}
              >
                <span className="text-sm text-gray-600">Previous</span>
                <span className="text-gray-700">{prev.title}</span>
              </Link>
            )}
          </div>

          <div className="w-full px-2 md:w-1/2">
            {next && (
              <Link
                to={next.url}
                className="flex flex-col p-4 text-right border border-gray-400 rounded hover:bg-gray-100 hover:border-gray-300"
                title={`Next Post ${next.title}`}
              >
                <span className="text-sm text-gray-600">Next</span>
                <span className="text-gray-700">{next.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </article>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($slug: String!) {
    markdownRemark(
      fields: { slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        date
        description
        draft
      }
    }
  }
`
