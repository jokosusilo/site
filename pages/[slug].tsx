import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Header from '../components/header'
import Layout from '../components/layout-article'
import { getPostBySlug, getAllPosts } from '../lib/api'
import PageTitle from '../components/page-title'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import type PostType from '../interfaces/post'
import DateFormatter from '../components/date-formatter'

type Props = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout preview={preview}>
      <Header />
      {router.isFallback ? (
        <PageTitle>Loading…</PageTitle>
      ) : (
        <>
          <Head>
            <title>{post.title} - Joko Susilo</title>
            {post.ogImage && (
              <meta property="og:image" content={post.ogImage.url} />
            )}
          </Head>
          <article className="max-w-3xl p-4 -mt-12 bg-white rounded-sm shadow-sm md:mt-0 md:p-8 md:mx-auto">
            <div className="mb-2 text-sm text-gray-600">
              <DateFormatter dateString={post.date} />
            </div>
            <PageTitle>{post.title}</PageTitle>
            <div
              className="mt-8 prose max-w-none prose-figure:w-3/4 prose-figure:mx-auto prose-figcaption:text-center"
              dangerouslySetInnerHTML={{ __html: post.content }}
            ></div>
          </article>
        </>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
