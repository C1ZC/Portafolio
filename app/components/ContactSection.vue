<template>
  <section class="w-full max-w-[960px] px-4 py-20 mx-auto" id="contact">
    <div class="bg-gradient-to-b from-surface-dark to-deep-dark rounded-2xl border border-border-green p-8 md:p-12 text-center relative overflow-hidden group reveal-hidden">
      <!-- Decorative animated grid lines -->
      <div class="absolute inset-0 opacity-20 grid-bg animate-pulse pointer-events-none"></div>
      
      <div class="relative z-10">
        <h2 class="text-white text-3xl md:text-4xl font-black mb-4 uppercase tracking-tighter glitch-text">Ready to join forces?</h2>
        <p class="text-slate-300 mb-8 max-w-lg mx-auto">I'm currently available for freelance work and full-time opportunities. Insert coin to continue.</p>
        <a href="mailto:camilo.zavala.c@gmail.com?subject=Contacto desde Portafolio&body=Hola Camilo," class="inline-flex items-center justify-center h-14 px-10 bg-primary text-deep-dark text-lg font-bold rounded-full hover:scale-110 transition-all duration-300 neon-glow active:scale-95 shadow-[0_0_30px_rgba(13,242,89,0.5)]" aria-label="Send message via email">
          <span class="material-symbols-outlined mr-2 animate-bounce" aria-hidden="true">mail</span>
          Send Message
        </a>
        <div class="mt-10 flex justify-center gap-6">
          <a class="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-1 group" href="https://github.com/C1ZC" target="_blank">
            <div class="size-10 rounded-full bg-border-green flex items-center justify-center group-hover:bg-accent-green transition-colors">
              <span class="material-symbols-outlined text-xl" aria-hidden="true">code</span>
            </div>
            <span class="text-xs font-medium">GitHub</span>
          </a>
          <a class="text-slate-400 hover:text-white transition-colors flex flex-col items-center gap-1 group" href="https://www.linkedin.com/in/camilo-zavala-cornejo/" target="_blank">
            <div class="size-10 rounded-full bg-[#28392e] flex items-center justify-center group-hover:bg-[#3b5443] transition-colors">
              <span class="material-symbols-outlined text-xl">work</span>
            </div>
            <span class="text-xs font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Contact logic could go here
</script>
