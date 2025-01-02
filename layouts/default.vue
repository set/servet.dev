<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <header class="py-8">
      <nav class="flex justify-between items-center mb-8">
        <NuxtLink to="/" class="text-2xl font-bold text-gray-800">Your Name</NuxtLink>
        <div class="space-x-6">
          <NuxtLink to="/" class="text-gray-700 hover:text-gray-900">Home</NuxtLink>
          <NuxtLink to="/blog" class="text-gray-700 hover:text-gray-900">Blog</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="py-8 mt-12 border-t border-gray-400/20">
      <p class="text-center text-gray-600">© {{ new Date().getFullYear() }} Your Name. All rights reserved.</p>
    </footer>
  </div>
</template>