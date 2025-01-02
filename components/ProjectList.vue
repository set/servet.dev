<template>
  <div>
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Portfolio & Collaborations</h2>
    <div class="space-y-6">
      <div 
        v-for="project in projects" 
        :key="project.title" 
        class="border border-gray-400/20 p-4 rounded bg-white/50 backdrop-blur-sm"
      >
        <h3 class="text-xl font-bold text-gray-800">{{ project.title }}</h3>
        <p class="mt-2 text-gray-700">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/types'

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A brief description of your first project.'
  },
  {
    title: 'Project Two',
    description: 'A brief description of your second project.'
  }
]
</script>