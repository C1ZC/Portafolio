<template>
  <div class="w-full max-w-[960px] px-4 py-8 mx-auto">
    <h3 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] mb-6 flex items-center gap-2">
      <span class="material-symbols-outlined text-sm text-primary">account_tree</span> SKILL TREE
    </h3>
    <div class="grid md:grid-cols-2 gap-8">
      <div class="space-y-5">
        <div v-for="skill in column1" :key="skill.name">
          <div class="flex justify-between text-sm font-bold text-white mb-2">
            <span>{{ skill.name }}</span>
            <span class="text-primary">{{ skill.value }}</span>
          </div>
          <div class="h-3 w-full bg-border-green rounded-full overflow-hidden relative">
            <div 
              class="h-full bg-primary shadow-[0_0_10px_theme('colors.primary')]" 
              :style="{ width: skill.value }"
            ></div>
            <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] w-full animate-shimmer"></div>
          </div>
        </div>
      </div>
      <div class="space-y-5">
        <div v-for="skill in column2" :key="skill.name">
          <div class="flex justify-between text-sm font-bold text-white mb-2">
            <span>{{ skill.name }}</span>
            <span class="text-primary">{{ skill.value }}</span>
          </div>
          <div class="h-3 w-full bg-border-green rounded-full overflow-hidden">
            <div 
              class="h-full bg-gradient-to-r from-primary to-emerald-600" 
              :style="{ width: skill.value }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const column1 = [
  { name: 'Python / Django / FastAPI', value: '95/100' },
  { name: 'JavaScript / TypeScript / Vue.js', value: '90/100' },
  { name: 'PostgreSQL / SQL Server / Supabase', value: '88/100' }
]
const column2 = [
  { name: 'Azure / Docker / Git', value: '85/100' },
  { name: 'n8n / IA (OpenAI / Ollama)', value: '80/100' },
  { name: 'HTML5 / CSS3 / TailwindCSS', value: '92/100' }
]
</script>
