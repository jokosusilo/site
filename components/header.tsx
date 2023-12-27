import Link from 'next/link'
import ActiveLink from './active-link';

const Header = () => {
  return (
    <div className="sticky top-0 z-10 py-2 mb-12 transition-colors duration-500 shadow-sm bg-white/75 backdrop-blur supports-backdrop-blur:bg-white/30">
      <div className="flex flex-col items-center justify-between max-w-3xl mx-auto md:flex-row ">
        <Link
          href="/"
          className="flex space-x-2 text-2xl font-bold leading-tight tracking-tight transition ease-in-out md:text-4xl md:tracking-tighter hover:underline hover:text-indigo-500 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 48 48"
            strokeWidth="1.5"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M24 13.592L5.075 8.208L6.337 19.12"
            />
            <ellipse
              cx="13.921"
              cy="24.725"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              rx="4.338"
              ry="4.348"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.935 32.722A9.438 9.438 0 0 1 6.337 19.12M24 39.792l-5.065-7.07M24 13.592l18.925-5.384l-1.262 10.912"
            />
            <ellipse
              cx="34.079"
              cy="24.725"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              rx="4.338"
              ry="4.348"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M29.065 32.722A9.438 9.438 0 0 0 41.663 19.12M24 39.792l5.065-7.07"
            />
          </svg>
          {/* <span>Blog.</span> */}
        </Link>
        <div className="flex justify-end mt-3 md:mt-0 md:items-center">
          <nav className="flex flex-row items-center w-full space-x-6 text-gray-700">
            <ActiveLink href="/articles" activeClassName="font-bold text-black">
              <span className="hover:text-black hover:border-black hover:font-bold">
                Articles
              </span>
            </ActiveLink>
            <ActiveLink href="/bookmark" activeClassName="font-bold text-black">
              <span className="hover:text-black hover:border-black hover:font-bold">
                Bookmark
              </span>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName="font-bold text-black">
              <span className="hover:text-black hover:border-black hover:font-bold">
                About
              </span>
            </ActiveLink>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Header
