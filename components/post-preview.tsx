import DateFormatter from './date-formatter'
import Link from 'next/link'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <Link as={`/${slug}`} href="/[slug]">
      <a className="block p-6 bg-white rounded-lg hover:bg-indigo-50/70">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="mt-1 mb-3 prose max-w-none">
          <p>{excerpt}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="mb-1 text-xs text-gray-500">
            <DateFormatter dateString={date} />
          </div>
          <div className="flex items-center text-xs font-medium text-indigo-500">
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-3 h-3 ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </a>
    </Link>
  );
}

export default PostPreview
