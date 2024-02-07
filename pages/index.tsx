import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
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
              <p className="text-3xl font-bold leading-10 tracking-wide text-gray-900">
                <span className="text-gray-500">Web developer.</span> Mostly
                code in PHP and Javascript. <br />
                Interested in minimalist design.
              </p>
              <p className="text-gray-700">
                Recently started writing more articles about project I've been
                working on, problems I've solved and whatever I like.
              </p>
            </div>
          </div>

          <div className="flex items-baseline pb-4 mt-24 ">
            <h3 className="flex-shrink-0 font-semibold text-gray-500">
              Recent Projects
            </h3>
            <div className="w-full h-[1px] bg-gray-200 ml-2"></div>
            {/* <p className="text-sm text-gray-700">
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
            </p> */}
          </div>
          {/* <div className="mt-8 space-y-8 md:-mx-6"></div> */}
          <div className="space-y-8 md:-mx-6">
            {latestProject.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 transition border-2 border-transparent border-gray-100 rounded-lg bg-gray-50 hover:shadow-sm hover:border-indigo-500 hover:border-2 hover:scale-100 hover:bg-indigo-50/70"
              >
                <div className="flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {project.name}{" "}
                    <span className="p-1 text-xs font-normal text-gray-700 bg-gray-100 rounded">
                      {project.year}
                    </span>
                  </h3>
                  <p className="mt-1 text-sm leading-normal text-gray-700">
                    {project.description}
                  </p>
                  <div className="mt-4 bg-gray-50">
                    {project.img && (
                      <Image
                        src={`/img/project/${project.img}`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                        alt={project.name}
                        // fill={true}
                      />
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
