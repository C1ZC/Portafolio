<template>
  <div class="layout-container flex flex-col items-center bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display min-h-screen">
    <div class="noise-bg"></div>
    <CustomCursor />
    <RetroNav />
    <main class="w-full flex flex-col items-center">
      <HeroSection />
      <div class="w-full relative overflow-hidden">
        <!-- Shared background for Stats and Tech Carousel -->
        <div class="absolute inset-0 starfield-bg star-container pointer-events-none opacity-40"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-deep-dark via-transparent to-deep-dark pointer-events-none"></div>
        <StatsSection />
        <TechCarousel />
      </div>
      <ProjectGallery />
      <Achievements />
      <ContactSection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { useReveal } from '~/composables/useReveal'

// Initialize scroll reveal animations
useReveal()

// Nuxt auto-imports components from app/components (in Nuxt 4)
</script>
