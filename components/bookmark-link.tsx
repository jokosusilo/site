type Props = {
  type: string;
  title: string;
  link: string;
};

const BookmarkLink = ({ type, title, link }: Props) => (
  <a
    href={link}
    title={`${type === `article` ? `Read more` : `Watch`} - ${title}`}
    className="flex items-center mt-0 text-gray-700 hover:text-indigo-500 group"
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
    <span className="underline border-gray-500 decoration-gray-500 underline-offset-4 group-hover:decoration-indigo-500 group-hover:decoration-2">
      {title}
    </span>
  </a>
);

export default BookmarkLink;