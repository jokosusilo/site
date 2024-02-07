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
          <img src="panda.png" alt="" className='w-12' />
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
