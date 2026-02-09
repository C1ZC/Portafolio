<template>
  <div 
    ref="cardRef"
    class="group relative bg-surface-dark border border-border-green rounded-xl overflow-hidden hover:border-primary transition-all duration-500 flex flex-col h-full flex-shrink-0 w-[300px] md:w-[380px]"
    :class="{ 
      'scale-110 z-20 border-primary shadow-[0_0_40px_theme(\'colors.primary\')]': isActive,
      'scale-95 opacity-50': !isActive && isCarouselMode
    }"
    :style="{ transform: tiltStyle }"
  >
    <div class="h-48 w-full bg-cover bg-center relative overflow-hidden" :style="{ backgroundImage: `url(${project.image})` }">
      <!-- CRT flicker overlay on hover -->
      <div class="absolute inset-0 bg-black/40 group-hover:bg-transparent group-hover:animate-pulse transition-all duration-300 z-10"></div>
      <div class="absolute inset-0 opacity-0 group-hover:opacity-20 bg-primary z-20 pointer-events-none transition-opacity"></div>
      
      <div :class="['absolute top-4 right-4 bg-black/70 px-2 py-1 rounded text-xs font-mono border z-30', project.badgeClass]">
        {{ project.badge }}
      </div>
    </div>
    <div class="p-6 flex flex-col flex-1 relative z-10">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
      <h3 class="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors glitch-text">{{ project.title }}</h3>
      <p class="text-slate-400 text-sm mb-4 flex-1">{{ project.description }}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span v-for="tag in project.tags" :key="tag" class="px-2 py-1 bg-border-green text-muted-green text-[10px] uppercase font-bold rounded border border-transparent group-hover:border-primary/30 transition-colors">{{ tag }}</span>
      </div>
      
      <div class="flex flex-col gap-2 mt-auto">
        <a 
          v-if="project.appUrl || project.repoUrl"
          :href="project.appUrl || project.repoUrl" 
          target="_blank"
          class="w-full text-center border border-primary text-primary hover:bg-primary hover:text-deep-dark font-bold text-sm py-2 rounded transition-all duration-300 uppercase neon-glow group-hover:translate-y-[-2px] active:scale-95"
        >
          {{ project.appUrl ? 'Play Level' : 'View Source' }}
        </a>
        <a 
          v-if="project.appUrl && project.repoUrl"
          :href="project.repoUrl" 
          target="_blank"
          class="w-full text-center border border-slate-600 text-slate-400 hover:border-primary hover:text-primary font-bold text-[10px] py-1 rounded transition-all duration-300 uppercase"
        >
          View Repository
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '~/types/portfolio'
import { useTilt } from '~/composables/useTilt'

defineProps<{
  project: Project
  isActive?: boolean
  isCarouselMode?: boolean
}>()

const cardRef = ref(null)
const { tiltStyle } = useTilt(cardRef)
</script>

<style scoped>
/* Ensure the parent doesn't clip the 3D effect */
.group {
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
</style>
