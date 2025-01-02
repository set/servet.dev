<template>
  <article class="max-w-3xl mx-auto">
    <header class="mb-8">
      <h1 class="text-4xl font-bold mb-4 text-gray-800">{{ data.title }}</h1>
      <time class="text-gray-600">{{ formatDate(data.date) }}</time>
    </header>
    
    <div class="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-orange-700 prose-a:no-underline hover:prose-a:text-orange-800 prose-blockquote:border-orange-300 prose-blockquote:bg-orange-50/50 prose-blockquote:px-4 prose-blockquote:py-1 prose-blockquote:rounded">
      <ContentRenderer :value="data" />
    </div>
  </article>
</template>

<script setup lang="ts">
const { path } = useRoute()
const { data } = await useAsyncData(`content-blog-${path}`, () => queryContent('blog', path).findOne())

if (!data.value) {
  throw createError({ statusCode: 404, message: 'Post not found' })
}

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

useHead({
  title: data.value.title,
  meta: [
    { name: 'description', content: data.value.description },
    { property: 'og:title', content: data.value.title },
    { property: 'og:description', content: data.value.description },
    { property: 'og:type', content: 'article' },
    { property: 'article:published_time', content: data.value.date },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: data.value.title },
    { name: 'twitter:description', content: data.value.description }
  ]
})
</script>