import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PageTitle = ({ children }: Props) => {
  return (
    // <h1 className="mb-12 text-5xl font-bold leading-tight tracking-tighter text-center md:text-7xl lg:text-8xl md:leading-none md:text-left">
    //   {children}
    // </h1>
    <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
      {children}
    </h1>
  );
}

export default PageTitle
