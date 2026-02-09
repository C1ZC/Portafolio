<template>
  <nav class="sticky top-0 z-50 w-full border-b border-solid border-primary/20 bg-deep-dark/95 backdrop-blur-md px-5 md:px-10 py-3 shadow-[0_4px_15px_rgba(13,242,89,0.1)]">
    <div class="max-w-[1200px] mx-auto flex items-center justify-between whitespace-nowrap">
      <div class="flex items-center gap-3 text-white">
        <div class="size-6 text-primary">
          <span class="material-symbols-outlined text-2xl">sports_esports</span>
        </div>
        <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em] uppercase">Dev<span class="text-primary">.Portfolio</span></h2>
      </div>
      <div class="hidden md:flex items-center gap-9">
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#hero">Start</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#stats">Stats</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#projects">Levels</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#achievements">Achievements</a>
        <a class="text-white/80 hover:text-primary transition-colors text-sm font-medium leading-normal" href="#contact">Contact</a>
      </div>
      <a href="mailto:camilo.zavala.c@gmail.com?subject=Propuesta de Trabajo&body=Hola Camilo," class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-deep-dark text-sm font-bold leading-normal tracking-[0.015em] hover:bg-white hover:shadow-[0_0_15px_rgba(13,242,89,0.6)] transition-all" aria-label="Hire me">
        <span class="truncate">Hire Me</span>
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
// Nav logic could go here
</script>
