<template>
  <div>
    <MarqueeHeader />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProjectList />
      <BlogPostList
        title="Latest Posts"
        :posts="posts"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { posts } = await useBlogPosts()

useHead({
  title: 'Servet Tuncel - Software Developer',
  meta: [
    { name: 'description', content: 'Personal website and blog of Servet Tuncel, a software developer focused on web development and modern technologies.' },
    { property: 'og:title', content: 'Servet Tuncel - Software Developer' },
    { property: 'og:description', content: 'Personal website and blog of Servet Tuncel, a software developer focused on web development and modern technologies.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Servet Tuncel - Software Developer' },
    { name: 'twitter:description', content: 'Personal website and blog of Servet Tuncel, a software developer focused on web development and modern technologies.' }
  ]
})
</script>