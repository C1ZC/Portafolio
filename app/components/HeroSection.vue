<template>
  <section class="w-full min-h-screen relative overflow-hidden flex items-center justify-center">
    <!-- Full-width background layers -->
    <div class="absolute inset-0 bg-gradient-to-b from-deep-dark via-background-dark to-deep-dark"></div>
    <div 
      class="absolute inset-0 opacity-10 pointer-events-none"
      :style="{ transform: `translate(${parallaxX}px, ${parallaxY}px)` }"
    >
      <div class="energy-conduit left-[20%]"></div>
      <div class="energy-conduit left-[50%] animation-delay-1000"></div>
      <div class="energy-conduit left-[80%] animation-delay-500"></div>
    </div>
    <div class="absolute inset-0 grid-bg opacity-5 pointer-events-none"></div>
    
    <!-- Centered content container -->
    <div class="max-w-[1200px] w-full mx-auto px-4 md:px-10 py-20 relative z-10">
      <div class="flex flex-col md:flex-row items-center justify-between gap-12">
        <!-- Left: Text Content -->
        <div class="flex-1 text-left space-y-6">
          <div class="inline-block">
            <span class="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-mono uppercase tracking-widest">
              ● System Online
            </span>
          </div>
          
          <div class="space-y-2">
            <h1 class="text-white text-5xl md:text-7xl font-black uppercase tracking-tight leading-none glitch-text">
              Camilo<br/>
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400 neon-text">Zavala</span>
            </h1>
          </div>
          
          <p class="text-slate-300 text-lg max-w-md leading-relaxed">
            <span class="text-primary font-semibold">Programador Full Stack</span> con experiencia en Python, Django, FastAPI y Vue.js. Especializado en APIs REST, automatización de flujos con n8n e integración de IA.
          </p>
          
          <div class="flex gap-4 pt-4">
            <a href="#projects" class="px-6 py-3 bg-primary text-background-dark font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_theme('colors.primary')]">
              ▶ Start Game
            </a>
            <a href="/Curriculum ATS CAMILO ZAVALA.pdf" target="_blank" class="px-6 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95">
              Download CV
            </a>
          </div>
        </div>

        <!-- Right: Avatar Card -->
        <div class="flex-1 w-full flex justify-center items-center relative z-10">
          <div class="absolute inset-0 bg-primary/20 blur-[100px] rounded-full opacity-30 animate-pulse"></div>
          <div class="relative w-full max-w-md aspect-square rounded-xl overflow-hidden border-4 border-border-green shadow-2xl bg-surface-dark scanline">
           <div class="absolute inset-0 bg-cover bg-center"
             :style="{ backgroundImage: `url(${useRuntimeConfig().app.baseURL}images/CamiloZavala.jpeg)`, opacity: 0.8 }"
              role="img"
              aria-label="Digital avatar of a programmer in a cyberpunk setting"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
            <div class="absolute bottom-6 left-6 right-6 bg-deep-dark/90 backdrop-blur border border-primary/30 p-4 rounded-lg transform transition-transform hover:scale-105 duration-300">
              <div class="flex items-center justify-between mb-2">
                <span class="text-primary text-xs font-mono uppercase tracking-widest">System Override</span>
                <span class="text-primary text-xs animate-pulse">●REC</span>
              </div>
              <p class="text-white font-bold text-lg">Camilo Zavala</p>
              <p class="text-slate-400 text-sm">Programador Full Stack</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const parallaxX = ref(0)
const parallaxY = ref(0)

const handleParallax = (e: MouseEvent) => {
  const x = (e.clientX - window.innerWidth / 2) / 50
  const y = (e.clientY - window.innerHeight / 2) / 50
  parallaxX.value = x
  parallaxY.value = y
}

onMounted(() => {
  window.addEventListener('mousemove', handleParallax)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleParallax)
})
</script>
