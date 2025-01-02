<template>
  <div>
    <h1 class="text-4xl font-bold mb-12 text-gray-800">Blog Posts</h1>
    <BlogPostList
      title="All Posts"
      :posts="posts"
    />
  </div>
</template>

<script setup lang="ts">
const { posts } = await useBlogPosts()
</script>