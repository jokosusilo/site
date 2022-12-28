import Layout from '../components/layout'
import Head from 'next/head'
import Header from '../components/header'
import latestProject from '../content/latest-project.json'

export default function Index() {
  return (
    <>
      <Head>
        <title>Joko Susilo - Web Developer</title>
      </Head>
      <Layout>
        <Header />
        <div className="flex flex-col max-w-3xl mx-4 md:mx-auto">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Joko Susilo
            </h1>
            <div className="mt-4 space-y-4">
              <p className="text-3xl font-bold text-gray-900 ">
                Web developer. Mostly code in PHP and Javascript. <br />
                Interested in minimalist design.
              </p>
              <p className="text-gray-700">
                Recently started writing more articles about project I've been
                working on, problems I've solved and whatever I like.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between mt-16 md:items-end md:flex-row">
            <h3 className="text-xl font-semibold">Recent Projects</h3>
            <p className="text-sm text-gray-700">
              More can be found on my
              <a
                href="https://github.com/jokosusilo"
                rel="noopener noreferrer"
                target="_blank"
                className="ml-1 border-b border-gray-500 hover:border-b-2 hover:text-indigo-500 hover:border-indigo-500"
              >
                GitHub
              </a>
              .
            </p>
          </div>
          <div className="mt-6 space-y-4">
            {latestProject.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-4 transition border border-transparent rounded-lg hover:shadow-sm bg-gray-50 hover:border-indigo-500 hover:scale-100 hover:bg-indigo-50/70"
              >
                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                <p className="mt-1 text-sm leading-normal text-gray-700">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
