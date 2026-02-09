<template>
  <section class="w-full relative overflow-hidden" id="stats">
    <!-- Full-width backgrounds -->
    <!-- Content is now over a shared background in app.vue -->
    <div class="absolute inset-0 radar-grid pointer-events-none opacity-5"></div>
    
    <!-- Centered content container -->
    <div class="max-w-[1200px] mx-auto px-4 md:px-10 py-16 relative z-10">
      <div class="flex items-center gap-3 mb-8">
        <span class="material-symbols-outlined text-primary">bar_chart</span>
        <h2 class="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] uppercase">Character Stats</h2>
        <div class="h-[1px] bg-border-green flex-1 ml-4" aria-hidden="true"></div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div v-for="(stat, index) in stats" :key="stat.label" 
             class="flex flex-col gap-2 rounded-lg border border-accent-green bg-surface-dark p-4 items-center text-center hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_theme('colors.primary')] hover:-translate-y-1 active:scale-95 group reveal-hidden" 
             :class="`reveal-delay-${index + 1}`"
             :aria-label="stat.description">
          <p class="text-white text-3xl font-bold leading-tight group-hover:text-primary transition-colors" :class="{ 'text-primary neon-text': stat.value === 'MAX' }">{{ stat.value }}</p>
          <p class="text-muted-green text-xs font-mono uppercase tracking-widest">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Stat {
  label: string;
  value: string;
  description: string;
}

const stats: Stat[] = [
  { label: 'Seniority', value: 'LVL 5', description: 'Seniority level 5' },
  { label: 'Commits', value: '99+', description: '99 plus commits' },
  { label: 'Coverage', value: '100%', description: '100 percent coverage' },
  { label: 'Stamina', value: 'MAX', description: 'Maximum stamina' }
]
</script>
