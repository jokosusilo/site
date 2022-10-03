import MoreStories from '../components/more-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Post from '../interfaces/post'
import Header from '../components/header'
import PageTitle from '../components/page-title'
import PostPreview from '../components/post-preview'

type Props = {
  allPosts: Post[]
}

export default function Articles({ allPosts }: Props) {
  return (
    <>
      <Head>
        <title>Articles - Joko Susilo</title>
      </Head>
      <Layout>
        <Header />
        <div className="max-w-3xl mx-4 md:mx-auto">
          <PageTitle>Articles</PageTitle>
          <div className="mt-8 space-y-8 md:-mx-6">
            {/* <MoreStories posts={allPosts} /> */}
            {allPosts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
