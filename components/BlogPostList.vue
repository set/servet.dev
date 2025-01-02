<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-gray-800">{{ title }}</h2>
    <div class="space-y-6">
      <article 
        v-for="post in posts" 
        :key="post.title" 
        class="border-b border-gray-400/20 pb-4"
      >
        <h3 class="text-xl font-bold text-gray-800">{{ post.title }}</h3>
        <time class="text-sm text-gray-600">{{ post.date }}</time>
        <p class="mt-2 text-gray-700">{{ post.excerpt }}</p>
        <NuxtLink :to="post.slug" class="inline-block mt-2 text-orange-700 hover:text-orange-800">
          Read more
        </NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BlogPost } from '~/types'

defineProps<{
  title: string
  posts: BlogPost[]
}>()
</script>