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
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
      />

      <article>
        <PageTitle>
          {post.frontmatter.title}
          {post.frontmatter.draft && (
            <span className="text-red-600"> - Draft</span>
          )}
        </PageTitle>
        <div className="flex items-center mt-2 text-sm text-gray-700">
          {convertDate(post.frontmatter.date)}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="pt-8 pb-12 prose max-w-none"
        />

        <hr className="mx-auto border-t-2 border-gray-400 border-dashed w-72"/>

        <nav className="flex flex-col justify-between pt-8 -mx-2 space-y-2 text-sm md:space-y-0 md:flex-row md:text-base">
          <div className="w-full px-2 md:w-1/2">
            {prev && (
              <Link
                to={prev.url}
                className="flex flex-col p-4 text-left border border-gray-400 rounded hover:border-gray-800"
                title={`Previous Post ${prev.title}`}
              >
                <span className="flex items-center text-sm text-gray-600">
                  <svg
                    className="inline-block w-4 h-4 stroke-current"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="11 17 6 12 11 7" />
                    <polyline points="18 17 13 12 18 7" />
                  </svg>
                  Previous
                </span>
                <span className="text-gray-700">{prev.title}</span>
              </Link>
            )}
          </div>

          <div className="w-full px-2 md:w-1/2">
            {next && (
              <Link
                to={next.url}
                className="flex flex-col p-4 text-right border border-gray-400 rounded hover:border-gray-800"
                title={`Next Post ${next.title}`}
              >
                <span className="flex items-center justify-end text-sm text-gray-600">
                  Next{" "}
                  <svg
                    className="inline-block w-4 h-4 stroke-current"
                    fill="none"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="13 17 18 12 13 7" />
                    <polyline points="6 17 11 12 6 7" />
                  </svg>
                </span>
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
