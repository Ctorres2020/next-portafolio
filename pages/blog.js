/* eslint-disable @next/next/no-sync-scripts */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Post from '../components/Post'
import { sortByDate } from '../utils'


export default function Blog({ posts }) {


  return (
    <div>
      <Head>
        <title>Blog del César</title>
        <meta name="description" content="Blog de César Torres" />
        
      </Head>

      <div className="posts">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

    </div>
  )
}

export async function getStaticProps() {
  //get files fromm the posts dir
  const files = fs.readdirSync(path.join('posts'))

  //get slug and frontmatter from posts
  const posts = files.map(filename => {
    //create slug
    const slug = filename.replace('.md', '')

    //get frontmatter
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })


  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}