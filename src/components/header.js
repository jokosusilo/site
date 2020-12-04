import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header
    className="flex items-center py-4 shadow-sm md:h-20"
    role="banner"
  >
    <div className="container flex flex-col items-center max-w-3xl px-4 mx-auto md:flex-row">
      <div className="flex items-center justify-center w-full md:justify-start">
        <Link
          to="/"
          className="inline-flex items-center hover:scale-125"
        >
          <svg className="icon icon-tabler icon-tabler-cloud-storm" height="40" width="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
            <polyline points="13 14 11 18 14 18 12 22" />
          </svg>
        </Link>
      </div>
      <div className="flex justify-end flex-1 mt-3 md:mt-0 md:items-center">
        <nav className="flex flex-row items-center w-full space-x-6 text-gray-700">
          <Link
            to="/articles/"
            className="hover:text-black hover:border-black"
            activeClassName="font-bold"
          >
            Articles
          </Link>
          <Link
            to="/bookmark/"
            className="hover:text-black hover:border-black"
            activeClassName="font-bold"
          >
            Bookmark
          </Link>
          <Link
            to="/about/"
            className="hover:text-black hover:border-black"
            activeClassName="font-bold"
          >
            About
          </Link>
        </nav>
      </div>
    </div>
  </header>
)

export default Header