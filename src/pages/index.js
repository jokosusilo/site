import React from "react"

import Layout from "../components/layout"
import latestProject from "../content/latest-project.json"
import PageTitle from "../components/page-title"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Joko Susilo" />
    <div className="flex flex-col">
      <div>
        <PageTitle>
          Joko Susilo
        </PageTitle>
        <div className="mt-6 space-y-2 text-lg text-gray-700">
          <p className="font-semibold text-gray-900">
            Web developer. Mostly code in PHP and Javascript. Interested in minimalist design.
          </p>
          <p>
            Recently started writing more articles about project I've been working on, problems I've solved and whatever I like.
          </p>
        </div>
      </div>

      <h3 className="mt-16 text-2xl font-semibold">Recent Projects</h3>
      <p className="text-gray-700">
        More can be found on my
        <a
          href="https://github.com/jokosusilo"
          rel="noopener noreferrer"
          target="_blank"
          className="ml-1 border-b border-gray-500 hover:text-black hover:border-black"
        >
          GitHub
        </a>
        .
      </p>
      <div className="mt-6 space-y-4">
        {latestProject.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 border border-l-4 border-gray-400 rounded-sm hover:shadow-sm hover:scale-105"
          >
            <h3 className="font-semibold text-gray-900">
              {project.name}
            </h3>
            <p className="mt-1 leading-snug text-gray-700">
              {project.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  </Layout>
)

export default IndexPage