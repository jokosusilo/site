import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const LayoutArticle = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen bg-gray-50">
        <main className="flex flex-col flex-1 border-b md:border-none md:mb-12">{children}</main>
        <Footer variant="white"/>
      </div>
    </>
  );
}

export default LayoutArticle
