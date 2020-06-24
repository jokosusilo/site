const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { GraphQLBoolean } = require("gatsby/graphql")

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === 'MarkdownRemark') {
    return {
      published: {
        type: GraphQLBoolean,
        resolve: ({ frontmatter }) => {
          if (process.env.NODE_ENV !== 'production') {
            return true
          }
          return !frontmatter.draft
        },
      },
    }
  }
  return {}
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: `/${slug.split("-").slice(1).join("-")}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
        edges {
          node {
            published
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const articles = result.data.allMarkdownRemark.edges

  articles.forEach(({ node }, index) => {
    if (!node.published) {
      return
    }

    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/article.js`),
      context: {
        slug: node.fields.slug,
        next: index === 0 ? null : articles[index - 1].node,
        prev: index === articles.length - 1 ? null : articles[index + 1].node
      },
    })
  })
}
