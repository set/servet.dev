import type { BlogPost } from '~/types'

export const useBlogPosts = async () => {
  const posts = await queryContent('blog')
    .sort({ date: -1 })
    .find()

  return {
    posts: posts.map(post => ({
      title: post.title,
      date: post.date,
      excerpt: post.description,
      slug: post._path.split('/').pop()
    })) as BlogPost[]
  }
}