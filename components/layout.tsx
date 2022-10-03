import Footer from './footer'
import Meta from './meta'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="flex flex-col min-h-screen bg-slate-50">
        <main className="flex-1 mb-8">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout
