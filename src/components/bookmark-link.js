import React from "react"
import PropTypes from "prop-types"

const BookmarkLink = ({ type, title, link }) => (
  <a
    href={link}
    title={`${type === `article` ? `Read more` : `Watch`} - ${title}`}
    className="flex items-center mt-0 text-gray-700 hover:text-black hover:border-black group"
    target="_blank"
    rel="noreferrer noopener"
  >
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mr-1"
    >
      <polyline points="7 13 12 18 17 13"></polyline>
      <polyline points="7 6 12 11 17 6"></polyline>
    </svg>
    <span className="border-b border-gray-500 group-hover:border-gray-900">
      {title}
    </span>
  </a>
)

BookmarkLink.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

BookmarkLink.defaultProps = {
  type: `article`,
}

export default BookmarkLink