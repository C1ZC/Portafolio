<template>
  <footer class="w-full border-t border-border-green/30 py-12 text-center relative overflow-hidden bg-deep-dark">
    <!-- Background Effects -->
    <div class="absolute inset-0 scanning-matrix opacity-10 pointer-events-none"></div>
    <div class="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    
    <div class="relative z-10 max-w-[1200px] mx-auto px-4">
      <!-- Arcade Status -->
      <div class="flex flex-col items-center mb-6">
        <div class="flex items-center gap-2 mb-2">
          <span class="size-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_theme('colors.primary')]"></span>
          <span class="text-primary font-mono text-[10px] tracking-[0.4em] uppercase">Mission Status: Complete</span>
        </div>
        <div class="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>

      <!-- Main Info -->
      <div class="space-y-4">
        <h3 class="text-white font-black italic tracking-tighter text-2xl md:text-3xl opacity-80 uppercase glitch-text">
          Thanks for Playing
        </h3>
        
        <p class="text-slate-400 text-sm font-mono tracking-wider">
          © 2026 <span class="text-primary font-bold">CAMILO ZAVALA</span>. ALL RIGHTS RESERVED.
        </p>

        <!-- Signature -->
        <div class="flex flex-col items-center gap-2 pt-4">
          <div class="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <span>Designed with</span>
            <span class="material-symbols-outlined text-xs text-red-500 animate-bounce">favorite</span>
            <span>&</span>
            <span class="text-primary underline decoration-primary/30 underline-offset-4">Hard Code</span>
          </div>
          <div class="text-[8px] font-mono text-slate-600 uppercase mt-2">
            Build v2.0.8 // c-zavala-os
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Glow -->
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-primary shadow-[0_0_20px_theme('colors.primary')] opacity-20"></div>
  </footer>
</template>

<script setup lang="ts">
// Footer logic
</script>

<style scoped>
.glitch-text {
  text-shadow: 2px 2px theme('colors.primary/20');
}
</style>
