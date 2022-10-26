import Link from 'next/link'
import ActiveLink from './active-link';

const Header = () => {
  return (
    <div className="sticky top-0 py-4 mb-12 transition-colors duration-500 shadow-sm bg-white/75 backdrop-blur supports-backdrop-blur:bg-white/30">
      <div className="flex flex-col items-center justify-between max-w-3xl mx-auto md:flex-row ">
        <Link href="/" className="flex space-x-2 text-2xl font-bold leading-tight tracking-tight transition ease-in-out md:text-4xl md:tracking-tighter hover:underline hover:text-indigo-500 hover:scale-110">
            <svg
              className="icon icon-tabler icon-tabler-cloud-storm"
              height="40"
              width="40"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" stroke="none" />
              <path d="M7 18a4.6 4.4 0 0 1 0 -9h0a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
              <polyline points="13 14 11 18 14 18 12 22" />
            </svg>
            {/* <span>Blog.</span> */}
        </Link>
        <div className="flex justify-end mt-3 md:mt-0 md:items-center">
          <nav className="flex flex-row items-center w-full space-x-6 text-gray-700">
            <ActiveLink href="/articles" activeClassName="font-bold text-black">
              <span className="hover:text-black hover:border-black hover:underline">Articles</span>
            </ActiveLink>
            <ActiveLink href="/bookmark" activeClassName="font-bold text-black">
              <span className="hover:text-black hover:border-black hover:underline">Bookmark</span>
            </ActiveLink>
            <ActiveLink href="/about" activeClassName="font-bold text-black">
              <span className="hover:text-black hover:border-black hover:underline">About</span>
            </ActiveLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header
