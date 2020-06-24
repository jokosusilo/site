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
        <PageTitle>
          {post.frontmatter.title}
          {post.frontmatter.draft && (
            <span className="text-red-600"> - Draft</span>
          )}
        </PageTitle>
        <div className="flex items-center block mt-2 text-sm text-gray-700">
          <svg
            className="mr-1 stroke-current feather feather-calendar"
            height="16"
            width="16"
            fill="none"
            strokeLinecap="round"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect height="18" width="18" rx="2" ry="2" x="3" y="4" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
          {convertDate(post.frontmatter.date)}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="content"
        />
        <div className="w-56 mt-3 border-b-2"></div>

        <nav className="flex flex-col justify-between mt-16 -mx-2 space-y-2 text-sm md:space-y-0 md:flex-row md:text-base">
          <div className="w-full px-2 md:w-1/2">
            {prev && (
              <Link
                to={prev.url}
                className="flex flex-col p-4 text-left border border-blue-200 rounded hover:bg-white"
                title={`Previous Post ${prev.title}`}
              >
                <span className="text-sm text-gray-500">Previous</span>
                <span className="text-gray-700">{prev.title}</span>
              </Link>
            )}
          </div>

          <div className="w-full px-2 md:w-1/2">
            {next && (
              <Link
                to={next.url}
                className="flex flex-col p-4 text-right border border-blue-200 rounded hover:bg-white"
                title={`Next Post ${next.title}`}
              >
                <span className="text-sm text-gray-500">Next</span>
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
