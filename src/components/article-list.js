import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import convertDate from "../utils"

const ArticleList = ({ node }) => (
  <div>
    <p className="text-sm text-gray-800">
      {convertDate(node.frontmatter.date)}
    </p>
    <h2 className="text-2xl">
      <Link
        to={node.fields.slug}
        title={`Read more - ${node.frontmatter.title}`}
        className="font-semibold border-b border-transparent hover:border-black"
      >
        {node.frontmatter.title}
        {node.frontmatter.draft && (
          <span className="text-red-600"> - Draft</span>
        )}
      </Link>
    </h2>
    <p className="mt-2 text-gray-700">{node.excerpt}</p>
  </div>
)

ArticleList.propTypes = {
  node: PropTypes.object.isRequired,
}

export default ArticleList