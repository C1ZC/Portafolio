<template>
  <div class="w-full overflow-hidden relative py-8">
    <!-- Full-width backgrounds -->
    <!-- Transparent background to blend with shared parent -->
    
    <!-- Centered content container -->
    <div class="max-w-[1200px] mx-auto px-4 relative z-10">
      <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-8 flex items-center gap-2">
        <span class="material-symbols-outlined text-sm text-primary">account_tree</span> TECH STACK & TOOLS
      </h3>
    
      <div class="relative flex overflow-x-hidden group py-4">
        <!-- Energy conduit lines -->
        <div class="energy-conduit opacity-20"></div>
        <div class="energy-conduit opacity-10 translate-y-4 scale-x-110"></div>
        <div class="energy-conduit opacity-10 -translate-y-4 scale-x-110"></div>

        <div class="flex animate-marquee whitespace-nowrap items-center py-4">
          <div v-for="(tech, index) in technologies" :key="'tech1-' + index" class="mx-8 flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
            <div class="w-16 h-16 flex items-center justify-center rounded-full p-3 border border-primary/20 hover:border-primary/50 transition-colors">
              <img :src="getIconUrl(tech.icon)" :alt="tech.name" class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <span class="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">{{ tech.name }}</span>
          </div>
        </div>

        <!-- Duplicate for seamless loop -->
        <div class="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center py-4">
          <div v-for="(tech, index) in technologies" :key="'tech2-' + index" class="mx-8 flex flex-col items-center gap-2 group-hover:scale-110 transition-transform duration-300">
            <div class="w-16 h-16 flex items-center justify-center rounded-full p-3 border border-primary/20 hover:border-primary/50 transition-colors">
              <img :src="getIconUrl(tech.icon)" :alt="tech.name" class="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <span class="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Technology } from '~/types/portfolio'

const technologies: Technology[] = [
  { name: 'JavaScript', icon: 'javascript' },
  { name: 'TypeScript', icon: 'typescript' },
  { name: 'React', icon: 'react' },
  { name: 'Vue.js', icon: 'vuedotjs' },
  { name: 'Nuxt.js', icon: 'nuxt' },
  { name: 'Node.js', icon: 'nodedotjs' },
  { name: 'Express', icon: 'express' },
  { name: 'Python', icon: 'python' },
  { name: 'FastAPI', icon: 'fastapi' },
  { name: 'Wordpress', icon: 'wordpress' },
  { name: 'Django', icon: 'django' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'Redis', icon: 'redis' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Cloudflare', icon: 'cloudflare' },
  { name: 'Tailwind CSS', icon: 'tailwindcss' },
  { name: 'Git', icon: 'git' },
  { name: 'GitHub', icon: 'github' },
  { name: 'Asana', icon: 'asana' },
  { name: 'N8n', icon: 'n8n' },
  { name: 'Figma', icon: 'figma' },
  { name: 'Postman', icon: 'postman' },
]

const getIconUrl = (name: string): string => {
  // Using simpleicons via cdn for reliability
  return `https://cdn.simpleicons.org/${name}/0df259`
}
</script>

<style scoped>
.animate-marquee {
  animation: marquee 40s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 40s linear infinite;
}

@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
}

.group:hover .animate-marquee,
.group:hover .animate-marquee2 {
  animation-play-state: paused;
}
</style>
