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
</script>